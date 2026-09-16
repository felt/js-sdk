/**
 * Generates a single-page API reference sized for LLM consumption.
 *
 * Organisation is derived entirely from the TypeDoc model: types are grouped by
 * the module they are declared in, and FeltController's members are grouped by
 * the controller they are inherited from. Nothing here is a hand-maintained
 * taxonomy, so a new type or method lands in the right section on its own.
 *
 * Output is kept compact by three structural mechanisms, each of which is
 * verified against the model before it is used and falls back to the full
 * rendering otherwise:
 *
 *   - Named inheritance: `interface X extends ExportedBase` renders as
 *     `ExportedBase & { own members }` rather than repeating the base.
 *   - Derivation: `XUpdate` / `XRead` render relative to `XCreate` (for
 *     example `{ id: string } & Partial<Omit<XCreate, "id">>`) when that is
 *     structurally exact.
 *   - Hoisting: members shared by every constituent of an exported union are
 *     emitted once as a documentation-only `<Union>Common` type.
 *
 * Inline structures that are identical to an exported alias are rendered by
 * the alias name (`[number, number, number, number]` becomes `FeltBoundary`).
 *
 * Runs as part of `npm run build`; `check:docs` fails if the committed output
 * is out of date.
 */
import * as fs from "node:fs";
import * as path from "node:path";

import { Application, ReflectionKind } from "typedoc";

/**
 * Named per the llms.txt convention (https://llmstxt.org): `llms-full.txt` is
 * the variant with all content inlined. Ships in the npm package via `files`.
 */
const OUT = "llms-full.txt";

/** The receiver that FeltController members are called on in user code. */
const RECEIVER = "felt";

/** Display titles for modules. Unlisted modules fall back to their directory name. */
const MODULE_TITLES = {
  main: "Entry Point",
  shared: "Core Types",
  basemaps: "Basemaps",
  layers: "Layers",
  elements: "Elements",
  selection: "Selection",
  interactions: "Interactions",
  tools: "Tools",
  ui: "UI",
  viewport: "Viewport",
  misc: "Map Details",
};

const MODULE_ORDER = [
  "main",
  "shared",
  "layers",
  "elements",
  "selection",
  "interactions",
  "basemaps",
  "tools",
  "ui",
  "viewport",
  "misc",
];

// ---------------------------------------------------------------- comments

const COMMENT_MAX = 110;
const REMARKS_MAX = 160;
const DEFAULT_MAX = 40;

function textOf(parts) {
  return (parts ?? []).map((p) => p.text ?? "").join("");
}

/** First sentence, where a paragraph break also ends a sentence. */
function firstSentenceOf(text) {
  const t = (text ?? "").trim().split(/\n\s*\n/)[0];
  if (!t) return "";
  const m = t.match(/^[\s\S]*?[.!?](?=\s|$)/);
  return (m ? m[0] : t).replace(/\s+/g, " ").trim();
}

function firstSentence(parts) {
  return firstSentenceOf(textOf(parts));
}

/**
 * Long summaries cost a line's worth of tokens each time they are emitted.
 * Cut at a clause boundary outside any brackets where one exists, otherwise
 * at a word boundary.
 */
function capComment(s, max = COMMENT_MAX) {
  if (s.length <= max) return s;
  const head = s.slice(0, max);
  let depth = 0;
  let clause = -1;
  for (let i = 0; i < head.length; i++) {
    const ch = head[i];
    if (ch === "(" || ch === "[" || ch === "{") depth++;
    else if (ch === ")" || ch === "]" || ch === "}")
      depth = Math.max(0, depth - 1);
    else if (depth === 0 && (ch === "," || ch === ";") && head[i + 1] === " ") {
      clause = i;
    } else if (depth === 0 && ch === " " && head[i + 1] === "(") clause = i;
  }
  if (clause > max * 0.4) {
    return head.slice(0, clause).replace(/[,;:\s]+$/, "") + ".";
  }
  const space = head.lastIndexOf(" ");
  return (
    head.slice(0, space > 0 ? space : max).replace(/[,;:\s]+$/, "") + "..."
  );
}

function summaryOf(comment) {
  return capComment(firstSentence(comment?.summary));
}

function tagText(comment, ...tags) {
  const t = comment?.blockTags?.find((b) => tags.includes(b.tag));
  return t ? textOf(t.content).trim() : "";
}

/** `@defaultValue` (TSDoc) or `@default` (JSDoc), as a short bare value. */
function defaultOf(comment) {
  let v = tagText(comment, "@defaultValue", "@default");
  if (!v) return "";
  v = v
    .replace(/^```[a-z]*\n?/i, "")
    .replace(/```$/, "")
    .replace(/`/g, "")
    .replace(/\s+/g, " ")
    .trim();
  // "default: undefined" says nothing an optional marker doesn't already say.
  if (v === "undefined" || v.length > DEFAULT_MAX) return "";
  return v;
}

/** First sentence of `@remarks`, or nothing if it will not fit on a line. */
function remarksOf(comment) {
  const r = firstSentenceOf(tagText(comment, "@remarks"));
  return r.length <= REMARKS_MAX ? r : "";
}
// ------------------------------------------------------ alias canonicalisation

/**
 * Exported aliases keyed by the canonical form of their target. An inline type
 * with the same canonical form is rendered as the alias name instead. Built to
 * a fixed point in `buildAliasMap`, since a key can depend on other aliases.
 */
let aliasByKey = new Map();
/** Union aliases, for folding a sub-union that matches one of them. */
let unionAliases = [];
/** Name of the declaration being rendered; it never substitutes itself. */
let renderingDecl = null;

const ALIASABLE = new Set(["union", "tuple", "reflection", "array"]);
const ALIAS_MIN_KEY = 16;

function aliasFor(t) {
  if (!t || !ALIASABLE.has(t.type)) return null;
  if (t.type === "reflection" && t.declaration?.signatures?.length) return null;
  const name = aliasByKey.get(rawKey(t));
  if (!name || name === renderingDecl) return null;
  return name;
}

/** Canonical form of a type: order-insensitive for unions and object members. */
function typeKey(t) {
  if (!t) return "unknown";
  return aliasFor(t) ?? rawKey(t);
}

function rawKey(t) {
  switch (t.type) {
    case "union":
      return resolveUnion(t)
        .map((i) => i.key)
        .sort()
        .join(" | ");
    case "intersection":
      return t.types.map(typeKey).sort().join(" & ");
    case "tuple":
      return `[${(t.elements ?? []).map(typeKey).join(", ")}]`;
    case "namedTupleMember":
      return `${typeKey(t.element)}${t.isOptional ? "?" : ""}`;
    case "array":
      return `${typeKey(t.elementType)}[]`;
    case "reflection":
      return reflectionKey(t.declaration);
    default:
      return renderRaw(t, 0);
  }
}

function reflectionKey(decl) {
  if (!decl) return "unknown";
  if (decl.signatures?.length) {
    const s = decl.signatures[0];
    const params = (s.parameters ?? [])
      .map((p) => {
        const opt =
          p.flags?.isOptional || p.defaultValue !== undefined ? "?" : "";
        return `${p.name}${opt}: ${typeKey(p.type)}`;
      })
      .join(", ");
    return `(${params}) => ${typeKey(s.type)}`;
  }
  return membersKey(decl.children ?? []);
}

function membersKey(members) {
  return `{ ${members.map(memberKey).sort().join("; ")} }`;
}

function memberKey(m) {
  const opt = m.flags?.isOptional ? "?" : "";
  const t = m.signatures?.length ? reflectionKey(m) : typeKey(m.type);
  return `${m.name}${opt}: ${t}`;
}

/**
 * Union members with any sub-union that exactly matches an exported union alias
 * folded into that alias. Used for both rendering and keys so they agree.
 */
function resolveUnion(t, indent = 0) {
  let items = t.types.map((x) => ({
    key: typeKey(x),
    str: renderType(x, indent),
  }));
  let changed = true;
  while (changed) {
    changed = false;
    for (const ua of unionAliases) {
      if (ua.name === renderingDecl || ua.keys.size >= items.length) continue;
      const idx = [...ua.keys].map((k) => items.findIndex((i) => i.key === k));
      if (idx.some((i) => i === -1)) continue;
      const first = Math.min(...idx);
      items = items.filter((_, i) => !idx.includes(i));
      items.splice(first, 0, { key: ua.name, str: ua.name });
      changed = true;
      break;
    }
  }
  return items;
}

function isAliasCandidate(refl) {
  if (refl.typeParameters?.length) return false;
  if (refl.kind === ReflectionKind.Interface)
    return (refl.children?.length ?? 0) > 0;
  if (refl.kind !== ReflectionKind.TypeAlias) return false;
  const t = refl.type;
  if (!t || !ALIASABLE.has(t.type)) return false;
  if (t.type === "reflection" && t.declaration?.signatures?.length)
    return false;
  return true;
}

function buildAliasMap(candidates) {
  aliasByKey = new Map();
  unionAliases = [];
  for (let iter = 0; iter < 8; iter++) {
    const next = new Map();
    const nextUnions = [];
    const collisions = new Set();
    for (const c of candidates) {
      renderingDecl = c.name;
      const key =
        c.kind === ReflectionKind.Interface
          ? membersKey(c.children)
          : rawKey(c.type);
      if (key.length < ALIAS_MIN_KEY || key.length <= c.name.length) continue;
      if (next.has(key) && next.get(key) !== c.name) collisions.add(key);
      next.set(key, c.name);
      if (c.kind === ReflectionKind.TypeAlias && c.type.type === "union") {
        nextUnions.push({
          name: c.name,
          keys: new Set(resolveUnion(c.type).map((i) => i.key)),
        });
      }
    }
    renderingDecl = null;
    // Two aliases with the same shape make substitution ambiguous; skip both.
    for (const k of collisions) next.delete(k);
    const stable =
      next.size === aliasByKey.size &&
      [...next].every(([k, v]) => aliasByKey.get(k) === v);
    aliasByKey = next;
    unionAliases = nextUnions.sort((a, b) => b.keys.size - a.keys.size);
    if (stable) break;
  }
}

// ------------------------------------------------------------------- types

function isComplex(t) {
  return t && (t.type === "union" || t.type === "intersection");
}

function renderType(t, indent = 0) {
  if (!t) return "unknown";
  return aliasFor(t) ?? renderRaw(t, indent);
}

function renderRaw(t, indent) {
  switch (t.type) {
    case "intrinsic":
      return t.name;
    case "literal":
      return typeof t.value === "string"
        ? JSON.stringify(t.value)
        : String(t.value);
    case "reference": {
      const args = t.typeArguments?.length
        ? `<${t.typeArguments.map((a) => renderType(a, indent)).join(", ")}>`
        : "";
      return `${t.name}${args}`;
    }
    case "union": {
      // `Layer | null` reads more naturally than `null | Layer`.
      const items = resolveUnion(t, indent);
      const nullish = items.filter(
        (i) => i.str === "null" || i.str === "undefined",
      );
      const rest = items.filter((i) => !nullish.includes(i));
      return [...rest, ...nullish].map((i) => i.str).join(" | ");
    }
    case "intersection":
      return t.types.map((x) => renderType(x, indent)).join(" & ");
    case "array": {
      const inner = renderType(t.elementType, indent);
      return isComplex(t.elementType) && !aliasFor(t.elementType)
        ? `(${inner})[]`
        : `${inner}[]`;
    }
    case "tuple":
      return `[${(t.elements ?? []).map((x) => renderType(x, indent)).join(", ")}]`;
    case "namedTupleMember":
      return `${t.name}${t.isOptional ? "?" : ""}: ${renderType(t.element, indent)}`;
    case "optional":
      return `${renderType(t.elementType, indent)}?`;
    case "rest":
      return `...${renderType(t.elementType, indent)}`;
    case "reflection":
      return renderReflectionType(t.declaration, indent);
    case "indexedAccess":
      return `${renderType(t.objectType, indent)}[${renderType(t.indexType, indent)}]`;
    case "typeOperator":
      return `${t.operator} ${renderType(t.target, indent)}`;
    case "query":
      return `typeof ${renderType(t.queryType, indent)}`;
    case "predicate":
      return t.targetType
        ? `${t.name} is ${renderType(t.targetType, indent)}`
        : String(t.name);
    case "templateLiteral": {
      const parts = (t.tail ?? [])
        .map(([type, text]) => `\${${renderType(type, indent)}}${text}`)
        .join("");
      return `\`${t.head}${parts}\``;
    }
    case "conditional":
      return `${renderType(t.checkType, indent)} extends ${renderType(
        t.extendsType,
        indent,
      )} ? ${renderType(t.trueType, indent)} : ${renderType(t.falseType, indent)}`;
    case "mapped":
      return `{ [${t.parameter} in ${renderType(t.parameterType, indent)}]: ${renderType(
        t.templateType,
        indent,
      )} }`;
    case "unknown":
      return t.name ?? "unknown";
    default:
      return t.name ?? "unknown";
  }
}

/** Object literal or inline function type. */
function renderReflectionType(decl, indent) {
  if (!decl) return "unknown";
  if (decl.signatures?.length) {
    const sig = decl.signatures[0];
    return `(${renderParams(sig, indent)}) => ${renderType(sig.type, indent)}`;
  }
  const members = decl.children ?? [];
  if (!members.length) return "{}";
  return renderMemberBlock(members, indent);
}

const LINE_BUDGET = 78;

const STOPWORDS = new Set([
  "the",
  "a",
  "an",
  "of",
  "to",
  "for",
  "in",
  "on",
  "this",
  "that",
  "is",
  "are",
  "be",
  "will",
  "which",
  "and",
  "or",
  "its",
  "it",
  "you",
  "if",
  "with",
  "when",
  "used",
  "use",
  "value",
  "values",
  "set",
  "get",
  "given",
  "any",
  "all",
  "as",
]);

function contentWords(s) {
  return s
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter((w) => w.length > 2 && !STOPWORDS.has(w))
    .map((w) => w.replace(/(ies|es|s|ed|ing)$/, ""));
}

/**
 * Most property docs just restate the property name — "The label to display in
 * the button" on `label`. Those cost bytes without telling a reader anything.
 * A comment is kept only when it introduces enough words that the name and type
 * don't already supply.
 */
let enclosingDeclName = "";

function commentAddsInformation(propName, typeStr, doc) {
  if (!doc) return false;
  const known = new Set([
    ...contentWords(propName),
    ...contentWords(typeStr),
    ...contentWords(enclosingDeclName),
  ]);
  const novel = contentWords(doc).filter((w) => !known.has(w));
  return novel.length >= 3;
}

function memberDoc(m, sigText) {
  const raw = summaryOf(m.comment);
  return commentAddsInformation(m.name, sigText, raw) ? raw : "";
}

function memberDefault(m) {
  const d = defaultOf(m.comment);
  return d ? `default: ${d}` : "";
}

function memberSignature(m, indent) {
  const optional = m.flags?.isOptional ? "?" : "";
  const readonly = m.flags?.isReadonly ? "readonly " : "";
  let rendered;
  if (m.signatures?.length) {
    const sig = m.signatures[0];
    rendered = `(${renderParams(sig, indent)}) => ${renderType(sig.type, indent)}`;
  } else {
    rendered = renderType(m.type, indent);
  }
  return `${readonly}${m.name}${optional}: ${rendered}`;
}

function renderMemberBlock(members, indent) {
  // Collapse to a single line where it fits. Small helper shapes like
  // `{ id: string }` dominate the callback signatures, and giving each of them
  // three lines is most of the difference between a usable doc and a huge one.
  // Only safe when no member carries a comment worth keeping, since the inline
  // form has nowhere to put one.
  const parts = members.map((m) => memberSignature(m, indent));
  const annotated = members.some(
    (m, i) => memberDoc(m, parts[i]) || memberDefault(m),
  );
  const inline = `{ ${parts.join("; ")} }`;
  if (
    !annotated &&
    !inline.includes("\n") &&
    inline.length + indent * 2 <= LINE_BUDGET
  ) {
    return inline;
  }

  const pad = "  ".repeat(indent + 1);
  const closePad = "  ".repeat(indent);
  const lines = members.map((m) => {
    const sigText = memberSignature(m, indent + 1);
    const doc = memberDoc(m, sigText);
    const def = memberDefault(m);
    const decl = `${pad}${sigText};`;
    const multiline = decl.includes("\n");
    if (!doc && !def) return decl;
    if (!doc) return `${decl} // ${def}`;
    // Short docs ride along on the same line; longer ones get their own.
    if (doc.length <= 60 && !multiline) {
      return `${decl} // ${doc}${def ? ` (${def})` : ""}`;
    }
    return `${pad}// ${doc}\n${decl}${def ? ` // ${def}` : ""}`;
  });
  return `{\n${lines.join("\n")}\n${closePad}}`;
}

function renderParams(sig, indent = 0) {
  return (sig.parameters ?? [])
    .map((p) => {
      const optional =
        p.flags?.isOptional || p.defaultValue !== undefined ? "?" : "";
      return `${p.name}${optional}: ${renderType(p.type, indent)}`;
    })
    .join(", ");
}

function typeParamsOf(refl) {
  const tp = refl.typeParameters;
  if (!tp?.length) return "";
  return `<${tp
    .map((p) => {
      const c = p.type ? ` extends ${renderType(p.type, 0)}` : "";
      const d = p.default ? ` = ${renderType(p.default, 0)}` : "";
      return `${p.name}${c}${d}`;
    })
    .join(", ")}>`;
}

// ------------------------------------------------------- structural plans

/** Members of an exported object-like type, or null if it is not one. */
function objectMembers(refl) {
  if (refl.typeParameters?.length) return null;
  if (refl.kind === ReflectionKind.Interface) return refl.children ?? [];
  if (
    refl.kind === ReflectionKind.TypeAlias &&
    refl.type?.type === "reflection" &&
    !refl.type.declaration?.signatures?.length
  ) {
    return refl.type.declaration?.children ?? [];
  }
  return null;
}

function memberInfo(m) {
  return {
    name: m.name,
    key: m.signatures?.length ? reflectionKey(m) : typeKey(m.type),
    optional: !!m.flags?.isOptional,
    refl: m,
  };
}

function memberMap(members) {
  return new Map(members.map((m) => [m.name, memberInfo(m)]));
}

/**
 * Bases that are themselves exported object types. `zInfer<...>`, `Omit<...>`
 * and the like are not, so a type extending those is treated as having no
 * nameable base.
 */
function namedBases(refl, exportedObjects) {
  if (refl.kind !== ReflectionKind.Interface) return null;
  const ext = refl.extendedTypes ?? [];
  if (!ext.length) return null;
  const names = [];
  for (const e of ext) {
    if (e.type !== "reference" || e.typeArguments?.length) return null;
    if (!exportedObjects.has(e.name) || e.name === refl.name) return null;
    names.push(e.name);
  }
  return names;
}

/**
 * Tries to express `target` as `{ explicit } & Wrapper<Omit<base, ...>>`.
 * Only succeeds when the result is structurally exact and shorter than
 * spelling the members out.
 */
function deriveFrom(target, targetMembers, base, baseMembers) {
  const tm = memberMap(targetMembers);
  const bm = memberMap(baseMembers);
  let best = null;
  for (const wrapper of [null, "Partial", "Required"]) {
    const explicit = [];
    const omit = [];
    let covered = 0;
    for (const [name, t] of tm) {
      const b = bm.get(name);
      const expectedOptional =
        wrapper === "Partial"
          ? true
          : wrapper === "Required"
            ? false
            : b?.optional;
      if (b && b.key === t.key && t.optional === expectedOptional) {
        covered++;
      } else {
        explicit.push(t.refl);
        if (b) omit.push(name);
      }
    }
    const missing = [...bm.keys()].filter((name) => !tm.has(name));
    omit.push(...missing);
    // Every member that has to be spelled out or named in Omit is a cost;
    // the derivation is only worth it when most members come for free.
    const cost = explicit.length + missing.length;
    if (covered < 3 || cost * 2 > covered) continue;
    if (!best || cost < best.cost) {
      best = { kind: "derived", base, wrapper, explicit, omit, cost };
    }
  }
  return best;
}

/** Base candidates for a derived type, by naming convention. */
function baseCandidates(name) {
  const stem = name.replace(/(Read|Update)$/, "");
  return [...new Set([`${stem}Create`, `${name}Create`])].filter(
    (c) => c !== name,
  );
}

// --------------------------------------------------------------- traversal

function moduleOfSource(refl) {
  const file = refl.sources?.[0]?.fileName ?? "";
  const m = file.match(/modules\/([^/]+)\//);
  return m ? m[1] : "main";
}

/** Filenames that describe the file's role rather than its subject. */
const GENERIC_FILENAMES = new Set([
  "types",
  "schema",
  "schemas",
  "index",
  "controller",
  "base",
]);

/** A sub-heading is only worth its cost when it groups this many declarations. */
const MIN_SUBGROUP = 4;

/**
 * Derives a sub-heading from the declaring file:
 *   ui/uiElements/UIButtonElement.ts -> "UIButtonElement"
 *   layers/stats/types.ts            -> "Stats"      (filename is generic)
 *   layers/types.ts                  -> null         (no useful subdivision)
 */
function subGroupOf(refl) {
  const file = refl.sources?.[0]?.fileName ?? "";
  const m = file.match(/modules\/[^/]+\/(.+)\.ts$/);
  if (!m) return null;

  const segments = m[1].split("/");
  const last = segments.pop();
  const name = GENERIC_FILENAMES.has(last) ? segments.pop() : last;
  if (!name || GENERIC_FILENAMES.has(name)) return null;

  // Leave PascalCase names alone; tidy up camelCase ones.
  if (/^[A-Z]/.test(name)) return name;
  const spaced = name.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function controllerToModule(controllerName) {
  return controllerName.replace(/Controller$/, "").toLowerCase();
}

/** 0: simple aliases, 1: object types and values, 2: unions of objects. */
function categoryOf(refl) {
  if (refl.kind !== ReflectionKind.TypeAlias || !refl.type) return 1;
  const t = refl.type;
  const simple = new Set(["intrinsic", "literal", "tuple", "templateLiteral"]);
  if (simple.has(t.type)) return 0;
  if (t.type === "array" && simple.has(t.elementType?.type)) return 0;
  if (t.type === "union" && t.types.every((x) => simple.has(x.type))) return 0;
  if (t.type === "union" || t.type === "intersection") return 2;
  return 1;
}

// ------------------------------------------------------------------- build

const app = await Application.bootstrapWithPlugins({
  entryPoints: ["src/client.ts"],
  plugin: ["typedoc-plugin-zod"],
  disableSources: false,
  logLevel: "Error",
});

const project = await app.convert();
if (!project) {
  console.error("TypeDoc conversion failed");
  process.exit(1);
}

const rootModule = project.children[0];
const allExports = rootModule.children ?? [];

let feltController = null;
for (const c of allExports) {
  if (c.name === "FeltController" && c.kind === ReflectionKind.Interface) {
    feltController = c;
  }
}
if (!feltController) {
  console.error("FeltController not found in the converted project");
  process.exit(1);
}

// The per-module controller interfaces are excluded: every one of their members
// is already emitted under the module's Methods/Events, so documenting them as
// types is the duplication this generator exists to avoid.
const isController = (refl) =>
  refl.kind === ReflectionKind.Interface && /Controller$/.test(refl.name);

const documentedTypes = allExports.filter(
  (c) => c !== feltController && !isController(c),
);
const typesByName = new Map(documentedTypes.map((c) => [c.name, c]));

buildAliasMap(documentedTypes.filter(isAliasCandidate));

// --- Structural plans ------------------------------------------------------

const exportedObjects = new Map();
for (const c of documentedTypes) {
  const members = objectMembers(c);
  if (members) exportedObjects.set(c.name, members);
}

/** name -> { kind: "namedBase" | "derived" | "hoisted", ... } */
const plans = new Map();
/** Documentation-only shared-member types, keyed by anchor constituent name. */
const synthetics = new Map();

for (const [name, members] of exportedObjects) {
  const bases = namedBases(typesByName.get(name), exportedObjects);
  if (!bases) continue;
  const own = members.filter(
    (m) =>
      !m.inheritedFrom ||
      !bases.some((b) => String(m.inheritedFrom.name).startsWith(`${b}.`)),
  );
  plans.set(name, { kind: "namedBase", bases, own });
}

for (const [name, members] of exportedObjects) {
  if (plans.has(name) || /Create$/.test(name)) continue;
  for (const baseName of baseCandidates(name)) {
    const baseMembers = exportedObjects.get(baseName);
    if (!baseMembers || plans.get(baseName)?.kind === "derived") continue;
    const plan = deriveFrom(
      name,
      members,
      typesByName.get(baseName),
      baseMembers,
    );
    if (plan) {
      plans.set(name, plan);
      break;
    }
  }
}

for (const c of documentedTypes) {
  if (c.kind !== ReflectionKind.TypeAlias || c.type?.type !== "union") continue;
  const refs = c.type.types;
  if (refs.length < 3 || !refs.every((r) => r.type === "reference")) continue;
  const constituents = refs
    .map((r) => r.name)
    .filter((n) => exportedObjects.has(n) && !plans.has(n));
  if (constituents.length < 3) continue;

  const maps = constituents.map((n) => memberMap(exportedObjects.get(n)));
  const common = [...maps[0].values()].filter((m) =>
    maps.every((mm) => {
      const o = mm.get(m.name);
      return o && o.key === m.key && o.optional === m.optional;
    }),
  );
  if (common.length < 3) continue;

  let syntheticName = `${c.name}Common`;
  while (typesByName.has(syntheticName)) syntheticName += "Props";
  const commonNames = new Set(common.map((m) => m.name));
  for (const n of constituents) {
    plans.set(n, {
      kind: "hoisted",
      common: syntheticName,
      own: exportedObjects.get(n).filter((m) => !commonNames.has(m.name)),
    });
  }
  synthetics.set(constituents[0], {
    name: syntheticName,
    union: c.name,
    members: common.map((m) => m.refl),
  });
}

// --- Declaration rendering -------------------------------------------------

function renderDerived(refl, plan) {
  const parts = [];
  if (plan.explicit.length) parts.push(renderMemberBlock(plan.explicit, 0));
  let ref = plan.base.name;
  if (plan.omit.length) {
    ref = `Omit<${ref}, ${plan.omit.map((k) => JSON.stringify(k)).join(" | ")}>`;
  }
  if (plan.wrapper) ref = `${plan.wrapper}<${ref}>`;
  parts.push(ref);
  return `type ${refl.name} = ${parts.join(" & ")};`;
}

/** Renders a top-level exported declaration as a TypeScript statement. */
function renderDeclaration(refl) {
  const name = refl.name + typeParamsOf(refl);
  enclosingDeclName = refl.name;
  renderingDecl = refl.name;
  try {
    const plan = plans.get(refl.name);
    if (plan?.kind === "namedBase") {
      const own = plan.own.length ? renderMemberBlock(plan.own, 0) : null;
      return `type ${name} = ${[...plan.bases, own].filter(Boolean).join(" & ")};`;
    }
    if (plan?.kind === "derived") return renderDerived(refl, plan);
    if (plan?.kind === "hoisted") {
      const own = plan.own.length ? ` & ${renderMemberBlock(plan.own, 0)}` : "";
      return `type ${name} = ${plan.common}${own};`;
    }

    if (refl.kind === ReflectionKind.TypeAlias) {
      return `type ${name} = ${renderType(refl.type, 0)};`;
    }

    if (refl.kind === ReflectionKind.Interface) {
      const members = refl.children ?? [];
      return `type ${name} = ${members.length ? renderMemberBlock(members, 0) : "{}"};`;
    }

    if (refl.kind === ReflectionKind.Variable) {
      return `const ${refl.name}: ${renderType(refl.type, 0)};`;
    }

    if (refl.signatures?.length) {
      return renderFunction(refl);
    }

    return `type ${name} = ${renderType(refl.type, 0)};`;
  } finally {
    renderingDecl = null;
  }
}

function renderSynthetic(s) {
  enclosingDeclName = s.name;
  return [
    `// Shared by every ${s.union} variant. Documentation shorthand, not an exported type.`,
    `type ${s.name} = ${renderMemberBlock(s.members, 0)};`,
  ].join("\n");
}

/**
 * Renders a callable. FeltController members are shown as calls on the
 * receiver (`felt.getLayer(...)`), since that is how user code reaches them.
 */
function renderFunction(refl, receiver = null) {
  const sig = refl.signatures?.[0];
  if (!sig) {
    const t = renderType(refl.type, 0);
    return receiver
      ? `${receiver}.${refl.name}: ${t};`
      : `const ${refl.name}: ${t};`;
  }
  const ret = renderType(sig.type, 0);
  const head = receiver
    ? `${receiver}.${refl.name}`
    : `${ret.startsWith("Promise<") ? "async function" : "function"} ${refl.name}`;
  return `${head}${typeParamsOf(sig)}(${renderParams(sig)}): ${ret};`;
}

function memberCommentLines(m) {
  const comment = m.signatures?.[0]?.comment ?? m.comment;
  const lines = [];
  const doc = summaryOf(comment);
  if (doc) lines.push(`// ${doc}`);
  const remarks = remarksOf(comment);
  if (remarks && remarks !== doc) lines.push(`// ${remarks}`);
  return lines;
}

// --- Ordering --------------------------------------------------------------

/**
 * Orders a block's declarations: simple aliases first so they precede their
 * first use, derived types directly after their base, and any hoisted common
 * type directly before its first constituent.
 */
function orderBlock(decls) {
  let ordered = [...decls].sort((a, b) => categoryOf(a) - categoryOf(b));
  for (const d of decls) {
    const p = plans.get(d.name);
    if (p?.kind !== "derived") continue;
    if (!ordered.some((x) => x.name === p.base.name)) continue;
    ordered = ordered.filter((x) => x !== d);
    let pos = ordered.findIndex((x) => x.name === p.base.name) + 1;
    while (
      pos < ordered.length &&
      plans.get(ordered[pos].name)?.kind === "derived" &&
      plans.get(ordered[pos].name).base.name === p.base.name
    ) {
      pos++;
    }
    ordered.splice(pos, 0, d);
  }
  const items = [];
  for (const d of ordered) {
    const s = synthetics.get(d.name);
    if (s) items.push({ synthetic: s });
    items.push(d);
  }
  return items;
}

// --- Bucketing -------------------------------------------------------------

const typesByModule = new Map();
for (const c of documentedTypes) {
  const mod = moduleOfSource(c);
  if (!typesByModule.has(mod)) typesByModule.set(mod, []);
  typesByModule.get(mod).push(c);
}

// FeltController members, bucketed by the controller they came from.
const membersByModule = new Map();
for (const member of feltController.children ?? []) {
  const from = member.inheritedFrom
    ? controllerToModule(String(member.inheritedFrom.name).split(".")[0])
    : "main";
  if (!membersByModule.has(from)) membersByModule.set(from, []);
  membersByModule.get(from).push(member);
}

const moduleNames = [
  ...new Set([...typesByModule.keys(), ...membersByModule.keys()]),
].sort((a, b) => {
  const ia = MODULE_ORDER.indexOf(a);
  const ib = MODULE_ORDER.indexOf(b);
  return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib) || a.localeCompare(b);
});

const isEvent = (m) => /^on[A-Z]/.test(m.name);
const isCallable = (m) => !!m.signatures?.length;

// --- Emit ------------------------------------------------------------------

const emittedTypes = [];
const emittedMembers = [];
const out = [];

out.push("# Felt SDK API Reference");
out.push("");
out.push(
  "Generated from the SDK's TypeScript definitions. Sections follow the SDK's " +
    "module structure; every type and every `FeltController` member appears exactly once. " +
    `\`${RECEIVER}\` is the \`FeltController\` returned by \`Felt.embed(...)\` or \`Felt.connect(...)\`.`,
);
out.push("");

// A compact menu of everything callable, so the model can pick a method before
// reading its section.
out.push(`Methods on \`${RECEIVER}\`, by section:`);
out.push("");
for (const mod of moduleNames) {
  const members = (membersByModule.get(mod) ?? []).filter(isCallable);
  if (!members.length) continue;
  const methods = members.filter((m) => !isEvent(m)).map((m) => m.name);
  const events = members.filter(isEvent).map((m) => m.name);
  const parts = [];
  if (methods.length) parts.push(methods.join(", "));
  if (events.length) parts.push(`events: ${events.join(", ")}`);
  out.push(`- ${MODULE_TITLES[mod] ?? mod}: ${parts.join("; ")}`);
}
out.push("");

function emitTypeBlock(items) {
  out.push("```typescript");
  for (const item of items) {
    if (item.synthetic) {
      out.push(renderSynthetic(item.synthetic));
      out.push("");
      continue;
    }
    const doc = summaryOf(item.comment);
    if (doc) out.push(`// ${doc}`);
    out.push(renderDeclaration(item));
    out.push("");
    emittedTypes.push(item.name);
  }
  if (out[out.length - 1] === "") out.pop();
  out.push("```");
  out.push("");
}

for (const mod of moduleNames) {
  const title = MODULE_TITLES[mod] ?? mod;
  out.push(`## ${title}`);
  out.push("");

  // --- Types -------------------------------------------------------------
  const types = typesByModule.get(mod) ?? [];
  if (types.length) {
    const grouped = new Map();
    for (const t of types) {
      const sub = subGroupOf(t) ?? "";
      if (!grouped.has(sub)) grouped.set(sub, []);
      grouped.get(sub).push(t);
    }
    // Small sub-groups fold into the module's unnamed block; a heading for one
    // or two declarations costs more than it organises.
    for (const [sub, decls] of [...grouped]) {
      if (sub && decls.length < MIN_SUBGROUP) {
        grouped.delete(sub);
        if (!grouped.has("")) grouped.set("", []);
        grouped.get("").push(...decls);
      }
    }
    if (grouped.has("")) {
      // Restore source order after folding.
      grouped.get("").sort((a, b) => types.indexOf(a) - types.indexOf(b));
    }
    const subs = [...grouped.keys()].sort((a, b) =>
      a === "" ? -1 : b === "" ? 1 : a.localeCompare(b),
    );

    for (const sub of subs) {
      if (sub) {
        out.push(`### ${sub}`);
        out.push("");
      }
      emitTypeBlock(orderBlock(grouped.get(sub)));
    }
  }

  // --- Properties, methods and events -----------------------------------
  const members = membersByModule.get(mod) ?? [];
  if (members.length) {
    const properties = members.filter((m) => !isCallable(m));
    const events = members.filter((m) => isCallable(m) && isEvent(m));
    const methods = members.filter((m) => isCallable(m) && !isEvent(m));

    for (const [heading, group] of [
      ["Properties", properties],
      ["Methods", methods],
      ["Events", events],
    ]) {
      if (!group.length) continue;
      out.push(`### ${heading}`);
      out.push("");
      out.push("```typescript");
      for (const m of group) {
        out.push(...memberCommentLines(m));
        out.push(renderFunction(m, RECEIVER));
        out.push("");
        emittedMembers.push(m.name);
      }
      if (out[out.length - 1] === "") out.pop();
      out.push("```");
      out.push("");
    }
  }
}

// --------------------------------------------------------------- coverage

const expectedTypes = new Set(documentedTypes.map((c) => c.name));
const expectedMembers = new Set(
  (feltController.children ?? []).map((c) => c.name),
);

function coverageErrors(label, expected, emitted) {
  const errors = [];
  const counts = new Map();
  for (const n of emitted) counts.set(n, (counts.get(n) ?? 0) + 1);
  const missing = [...expected].filter((n) => !counts.has(n));
  const repeated = [...counts].filter(([, c]) => c > 1).map(([n]) => n);
  const extra = [...counts.keys()].filter((n) => !expected.has(n));
  if (missing.length) errors.push(`  missing ${label}: ${missing.join(", ")}`);
  if (repeated.length)
    errors.push(`  repeated ${label}: ${repeated.join(", ")}`);
  if (extra.length) errors.push(`  unexpected ${label}: ${extra.join(", ")}`);
  return errors;
}

const errors = [
  ...coverageErrors("types", expectedTypes, emittedTypes),
  ...coverageErrors("members", expectedMembers, emittedMembers),
];
if (errors.length) {
  console.error("Coverage check failed.");
  for (const e of errors) console.error(e);
  process.exit(1);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, out.join("\n").replace(/\n{3,}/g, "\n\n"));

const bytes = fs.statSync(OUT).size;
const planCounts = {};
for (const p of plans.values())
  planCounts[p.kind] = (planCounts[p.kind] ?? 0) + 1;
console.log(
  `${OUT}: ${expectedMembers.size} members, ${expectedTypes.size} types, ` +
    `${(bytes / 1024).toFixed(1)}KB`,
);
console.log(
  `  compaction: ${Object.entries(planCounts)
    .map(([k, v]) => `${k}=${v}`)
    .join(", ")}, aliases=${aliasByKey.size}, synthetic=${synthetics.size}`,
);
