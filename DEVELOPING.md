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

Often, you won't need to add a new module and can instead just add your functionality to an
existing module. In that case, you generally will need to add new messages to the `schema.ts` file
and update the `controller.ts` file to add your new methods and listeners.

If you need to create a new module, you'll need to do the following (although it's usually a good
idea to copy a simple module):

1. Create a new directory in `src/modules` with the following files:
   - `schema.ts` - this defines the messages that can be sent to the Felt client. This is internal
     to the module and should not be exposed to the Felt client.
   - `controller.ts` - this defines the methods and listeners that are added to the Felt client. You
     then use the `methods` and `listener` helpers to produce functions that send messages defined
     in the `schema.ts` file to the Felt client.
   - `types.ts` - Used for reusable types that are used across the module.
   - `index.ts` - The public part of the module that ends up in the client bundle.
2. Ensure your module is referenced in the following places:
   - `src/client.ts` as `export * from "./modules/my-module"`
   - `src/modules/main/controller.ts` in the `makeController` function and the `FeltController` interface
   - `src/modules/main/schema.ts` in the `allModules` array and the `AllModules` type

To summarize: the `schema` file defines which messages Felt will accept from the client, and the `controller`
file lets you send those messages to the Felt map from the client. The changes in `main` are simply to
include your module in the overall API, and the `types` is supporting code.

Once you have added your module:

1. Run `npm run build` to ensure everything compiles and the docs are generated. It's possible for the docs to
   fail to build if some types are not exported, but you will be warned in the console about this.
1. Run `npm run update-api` to run api-extractor which updates the "api spec" file, which allows
   reviewers to understand the changes made to the API.
1. Stage or commit your changes. This is important, because the next step will fail if you have
   docs changes that are unstaged as it is used to check that the docs are up to date.
1. Run `npm run check` which will check that the package is correctly built, the docs have been
   updated, the API spec has been updated and the tests are passing.

If this all works, your module is ready and should be working.

There are various checks in the `check` script to ensure that:

- everything compiles
- the bundle is correctly built with the correct types
- everything is used (i.e. you didn't forget to add your module to the main module list)
- the docs build and all necessary types are included
- `zod` isn't accidentally included in the client bundle
- the `handler` correctly receives every message that the client can send

### Adding support to Felt

Once you have added your new SDK functionality, you need to make sure Felt handles these new messages
correctly.

You will need to first link the package to the Felt app:

1. From this repo, run `yarn link`
2. From the Felt app, run `yarn link @feltmaps/js-sdk`
3. Restart the Felt app to ensure the changes are picked up - this should happen automatically
   without restarting but I'm not sure it's 100% reliable.

Now you can develop against the new version of the SDK.

You will need to add handlers for any new messages, as well as an end-to-end test for any new
methods or listeners added to the client.

TypeScript should force you to do this, so run `npx tsc --noEmit --watch` in the Felt app repo
to be guided around the codebase.

### Releasing

#### Prerelease

Once you've added support in Felt, you will need to release a prerelease version of the SDK, in
order that the Felt app can pick up the new version.

Back in this repo:

1. Add a changeset for your SDK changes with `npm run changeset` - choose a patch, minor or major
   depending on your change.
2. Open a PR against `main` for your changes and merge it once the checks pass.
3. Once it is merged, the prerelease docs will be updated.

Now your changes are in `main` which is where the prerelease will be published from.

To publish the prerelease package:

1. Ensure we are in prerelease mode with `npm run enter-prerelease`
2. Run `npm run local-release` which will build the package and publish it to `@feltmaps/js-sdk`
   with the `next` tag. This will print out the version it created, something like `0.0.1-next.0`.

To use the prerelease package in Felt:

1. In the Felt app, update the version in `package.json` to match the version you just published,
   like: `"@feltmaps/js-sdk": "0.0.1-next.0"` and install with `yarn install`.
2. Open a PR in the Felt repo and merge it.

#### Public release

Once `main` is in a state to promote to a public release, you can do the following on `main`:

1. Run `npm run exit-prerelease` to remove the prerelease tag and bump the version number.
2. Run `npm run local-release` to publish the package to the `@feltmaps/js-sdk` npm package.
3. Merge the change into the `release` branch with `git checkout release && git merge main --ff-only && git push`.
   This will publish the API reference docs to the public docs site.
