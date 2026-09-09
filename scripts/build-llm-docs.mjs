/**
 * Generates a single-page API reference sized for LLM consumption.
 *
 * Organisation is derived entirely from the TypeDoc model: types are grouped by
 * the module they are declared in, and FeltController's members are grouped by
 * the controller they are inherited from. Nothing here is a hand-maintained
 * taxonomy, so a new type or method lands in the right section on its own.
 *
 * Usage: node scripts/build-llm-docs.mjs [--examples] [--out <path>]
 */
import * as fs from "node:fs";
import * as path from "node:path";

import { Application, ReflectionKind } from "typedoc";

const argv = process.argv.slice(2);
const INCLUDE_EXAMPLES = argv.includes("--examples");
const OUT = (() => {
  const i = argv.indexOf("--out");
  if (i !== -1 && argv[i + 1]) return argv[i + 1];
  return INCLUDE_EXAMPLES ? "docs-llm/sdk-with-examples.md" : "docs-llm/sdk.md";
})();

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

function textOf(parts) {
  return (parts ?? []).map((p) => p.text ?? "").join("");
}

function firstSentence(parts) {
  const t = textOf(parts).trim();
  if (!t) return "";
  const m = t.match(/^[\s\S]*?[.!?](?=\s|$)/);
  return (m ? m[0] : t).replace(/\s+/g, " ").trim();
}

/** `@example` bodies arrive as fenced code; normalise to a bare ts block. */
function exampleBlock(comment) {
  const tag = comment?.blockTags?.find((t) => t.tag === "@example");
  if (!tag) return null;
  let body = textOf(tag.content).trim();
  const fenced = body.match(/^```[a-z]*\n([\s\S]*?)\n?```$/i);
  if (fenced) body = fenced[1];
  body = body.trim();
  return body ? body : null;
}

// ------------------------------------------------------------------- types

function isComplex(t) {
  return t && (t.type === "union" || t.type === "intersection");
}

function renderType(t, indent = 0) {
  if (!t) return "unknown";
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
    case "union":
      return t.types.map((x) => renderType(x, indent)).join(" | ");
    case "intersection":
      return t.types.map((x) => renderType(x, indent)).join(" & ");
    case "array": {
      const inner = renderType(t.elementType, indent);
      return isComplex(t.elementType) ? `(${inner})[]` : `${inner}[]`;
    }
    case "tuple":
      return `[${(t.elements ?? []).map((x) => renderType(x, indent)).join(", ")}]`;
    case "named-tuple-member":
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
  const raw = firstSentence(m.comment?.summary);
  return commentAddsInformation(m.name, sigText, raw) ? raw : "";
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
  const anyDocs = members.some((m, i) => memberDoc(m, parts[i]));
  const inline = `{ ${parts.join("; ")} }`;
  if (
    !anyDocs &&
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
    const decl = `${pad}${sigText};`;
    if (!doc) return decl;
    // Short docs ride along on the same line; longer ones get their own.
    if (doc.length <= 60 && !decl.includes("\n")) return `${decl} // ${doc}`;
    return `${pad}// ${doc}\n${decl}`;
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

/** Renders a top-level exported declaration as a TypeScript statement. */
function renderDeclaration(refl) {
  const name = refl.name + typeParamsOf(refl);
  enclosingDeclName = refl.name;

  if (refl.kind === ReflectionKind.TypeAlias) {
    return `type ${name} = ${renderType(refl.type, 0)};`;
  }

  if (refl.kind === ReflectionKind.Interface) {
    // Inherited members are already flattened into `children`, so naming the
    // base types would repeat them — and for zod-derived bases it would leak
    // `zInfer<typeof SomeSchema>`, which tells a reader nothing.
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
}

/** Renders a FeltController member as a standalone function declaration. */
function renderFunction(refl) {
  const sig = refl.signatures?.[0];
  if (!sig) return `const ${refl.name}: ${renderType(refl.type, 0)};`;
  const ret = renderType(sig.type, 0);
  const isAsync = ret.startsWith("Promise<");
  const kw = isAsync ? "async function" : "function";
  return `${kw} ${refl.name}${typeParamsOf(sig)}(${renderParams(sig)}): ${ret};`;
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

// Types, bucketed by declaring module.
const typesByModule = new Map();
for (const c of allExports) {
  if (c === feltController || isController(c)) continue;
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

const emittedTypes = new Set();
const emittedMembers = new Set();
const out = [];

out.push("# Felt SDK API Reference");
out.push("");
out.push(
  "Generated from the SDK's TypeScript definitions. Sections follow the SDK's " +
    "module structure; every type and every `FeltController` member appears exactly once.",
);
out.push("");

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
    const subs = [...grouped.keys()].sort((a, b) =>
      a === "" ? -1 : b === "" ? 1 : a.localeCompare(b),
    );

    for (const sub of subs) {
      if (sub) {
        out.push(`### ${sub}`);
        out.push("");
      }
      out.push("```typescript");
      for (const t of grouped.get(sub)) {
        const doc = firstSentence(t.comment?.summary);
        if (doc) out.push(`// ${doc}`);
        out.push(renderDeclaration(t));
        out.push("");
        emittedTypes.add(t.name);
      }
      if (out[out.length - 1] === "") out.pop();
      out.push("```");
      out.push("");
    }
  }

  // --- Methods and events ------------------------------------------------
  const members = membersByModule.get(mod) ?? [];
  if (members.length) {
    const events = members.filter((m) => /^on[A-Z]/.test(m.name));
    const methods = members.filter((m) => !/^on[A-Z]/.test(m.name));

    for (const [heading, group] of [
      ["Methods", methods],
      ["Events", events],
    ]) {
      if (!group.length) continue;
      out.push(`### ${heading}`);
      out.push("");
      if (INCLUDE_EXAMPLES) {
        // Examples need their own block per method, so signatures can't be pooled.
        for (const m of group) {
          const sig = m.signatures?.[0];
          const doc = firstSentence(
            sig?.comment?.summary ?? m.comment?.summary,
          );
          out.push("```typescript");
          if (doc) out.push(`// ${doc}`);
          out.push(renderFunction(m));
          const ex = exampleBlock(sig?.comment ?? m.comment);
          if (ex) {
            out.push("");
            out.push(ex);
          }
          out.push("```");
          out.push("");
          emittedMembers.add(m.name);
        }
      } else {
        out.push("```typescript");
        for (const m of group) {
          const sig = m.signatures?.[0];
          const doc = firstSentence(
            sig?.comment?.summary ?? m.comment?.summary,
          );
          if (doc) out.push(`// ${doc}`);
          out.push(renderFunction(m));
          out.push("");
          emittedMembers.add(m.name);
        }
        if (out[out.length - 1] === "") out.pop();
        out.push("```");
        out.push("");
      }
    }
  }
}

// --------------------------------------------------------------- coverage

const expectedTypes = new Set(
  allExports
    .filter((c) => c !== feltController && !isController(c))
    .map((c) => c.name),
);
const expectedMembers = new Set(
  (feltController.children ?? []).map((c) => c.name),
);

const missingTypes = [...expectedTypes].filter((n) => !emittedTypes.has(n));
const missingMembers = [...expectedMembers].filter(
  (n) => !emittedMembers.has(n),
);

if (missingTypes.length || missingMembers.length) {
  console.error("Coverage check failed.");
  if (missingTypes.length)
    console.error("  missing types:", missingTypes.join(", "));
  if (missingMembers.length)
    console.error("  missing members:", missingMembers.join(", "));
  process.exit(1);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, out.join("\n").replace(/\n{3,}/g, "\n\n"));

const bytes = fs.statSync(OUT).size;
console.log(
  `${OUT}: ${expectedMembers.size} members, ${expectedTypes.size} types, ` +
    `${(bytes / 1024).toFixed(1)}KB${INCLUDE_EXAMPLES ? " (with examples)" : ""}`,
);
