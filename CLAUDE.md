# @feltmaps/js-sdk

Public JS SDK for embedding and controlling Felt maps. Two entry points: `client` (external consumers) and `handler` (internal, used by the Felt app).

## Commands

- `npm run check` — full validation (bundle, format, API, types, tests, docs)
- `npm run build` — compile + generate `docs/` and `llms-full.txt` (commit both; `npm run check` fails on drift)
- `npm run update-api` — regenerate `etc/js-sdk.api.md` after API changes (stage before `npm run check`)

## Key constraints

- Every change needs a changeset (`npm run changeset`).
- Never edit `version` in `package.json` by hand; the release flow (`changeset version`) owns it and syncs `package-lock.json`. If `npm run check:lockfile` fails, run `npm install --package-lock-only`.
- See `DEVELOPING.md` for module structure and `RELEASING.md` for the branching/release model.

## TSDoc conventions

`llms-full.txt` is generated from the TSDoc and is what AI agents read when using the SDK, so the
comment on every exported type, property and method is part of the public API.

- Summary: one sentence. Only the first sentence is rendered.
- `@defaultValue` for defaults. Rendered as `default: ...`; not rendered for `undefined`.
- `@remarks` for anything an agent needs that the types don't show: what each enum value means,
  pagination rules, caveats, which methods a value can be passed to. Rendered in full; bulleted and
  numbered lists keep their lines.
- `@example` is only rendered in the TypeDoc site, not in `llms-full.txt`, so don't rely on examples
  to carry information that isn't also in the summary or `@remarks`.
