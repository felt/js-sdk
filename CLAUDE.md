# @feltmaps/js-sdk

Public JS SDK for embedding and controlling Felt maps. Two entry points: `client` (external consumers) and `handler` (internal, used by the Felt app).

## Commands

- `npm run check` — full validation (bundle, format, API, types, tests, docs)
- `npm run build` — compile + generate docs
- `npm run update-api` — regenerate `etc/js-sdk.api.md` after API changes (stage before `npm run check`)

## Key constraints

- Every change needs a changeset (`npm run changeset`).
- See `DEVELOPING.md` for module structure and `RELEASING.md` for the branching/release model.
