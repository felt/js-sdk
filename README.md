# @feltmaps/js-sdk

An SDK for Felt maps.

## Development

Get started by cloning the repo and installing dependencies:

```
npm install
```

Make sure everything is working:

```
npm run check
```

### Principles

The SDK is broadly in two parts:

- instantiating a Felt client via `Felt.embed` or `Felt.connect`
- using the client to control, query and listen to the map

The second part is defined as much as possible via a messaging schema. This schema defines
all the messages that the Felt app knows how to handle. These can be in the form of
methods (telling the map to do something, optionally returning a result) and listeners
(notifying the client when something changes in the map).

The client contains no logic, and simply defines the shape of the TypeScript API, using
the `method` and `listener` helpers.

The SDK includes a `handlers` package which contains helpers for implementing the
handlers for these messages. This is used exclusively by the Felt app to define the
handlers for messages sent from the Felt client.

The messaging schema is defined using `zod`, and the `handlers` package requires `zod` in
order to parse and validate the messages coming from the client.

The root `client` package does not depend on `zod` at all. All the logic for parsing and
validating messages is handled by the `handlers` package. This means that anyone using the
SDK doesn't have to include `zod` in their own application.

### Adding to the API

The parts of Felt that can be interacted with are defined in the `src/modules` directory.

Each module exports a `controller` and a `schema`.

The `schema` file describes the possible messages in their runtime and type-only forms.

The `controller` file describes the shape of the TypeScript API for that module.

Steps to add a new module:

1. Create a new directory in `src/modules`
2. Add a `schema.ts` for the messages that the module can send and receive, following the
   examples of existing modules.
3. Include this schema in the "root" `src/modules/schema.ts` file, in the runtime and type-only
   versions. You should now be able to use the `methods` and `listener` helpers
   to produce functions that send messages to the Felt client.
4. Add a `controller.ts` for the module, using the `methods` and `listener` helpers
   to define the shape of the TypeScript API for that module.
5. Add your controller to the "root" `src/modules/controller.ts` file, which glues together
   all the modules into a single object.

Once you have added your module:

1. Run `npm run update-api` to run api-extractor which updates the "api spec" file, which allows
   reviewers to understand the changes made to the API.
2. Run `npm run build:docs` to generate the docs changes.
3. Stage or commit your changes. This is important, because the next step will fail if you have
   docs changes that are unstaged as it is used to check that the docs are up to date.
4. Run `npm run check` which will check that the package is correctly built, the docs have been
   updated, the API spec has been updated and the tests are passing.
5. Push your changes and open a PR.
6. Once you are happy with your PR, add and push a changeset commit with `npm run changeset` and
   choose whether it should be a major, minor or patch release.

#### Releasing

**Note:** This is a temporary process while we don't have automated releases set up.

1. From `main`, run `npm run local-release`. This will consolidate the changsets, bump the version
   number accordingly, publish the package to npm and push the change to main.
