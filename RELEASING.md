# Releasing the SDK

The SDK is published via NPM and we do prereleases and public releases.

Prereleases are required in order for us to use that SDK version in the Felt app, so our
SDK handlers can act on the newest methods and listeners in the SDK before we publish the
public SDK.

By "publicly" we mean "not a next tag" in NPM. i.e. the "latest" version that someone should
get when they install our SDK with `npm i @feltmaps/js-sdk`.

Releasing also means updating the documentation on the public documentation site, which is
automatically synced into GitBook from this repo's branches.

## Branches

We use three long-lived branches for our work:

- `main` - this is where all new features are merged into.
  - This represents the state of all completed SDK work _that can be chosen to go into a
    release_.
  - This branch's `docs` folder is synced into GitBook for our "staging" docs site.
- `prerelease` - this is where we prepare prereleases _and public releases_
  - it represents the state of what we're going to publish in the future
  - we cherry-pick functionality from `main` into here to make it releaseable
  - we release multiple prerelease versions from here
  - once we're done, we release the public version from here and PR the changes back into
    `main`
- `release` - this is updated from `prerelease` following a public release
  - This branch's `docs` folder is synced into GitBook for our public docs site.

## Release flow

### Prerelease

Assuming you have merged your SDK PR into `main`, you need to do the following to publish
the prerelease onto NPM:

1. `npm run enter-prerelease` - ensure the tooling is in prerelease mode. This might fail if
   you are already in `pre` mode (i.e. we're adding more to the prerelease) but that's ok.
2. Run `npm run list-changes` to see what changes from `main` can be cherry-picked.
3. `git cherry-pick <commit from main that you want to include>` - bring the changes you want
   to publish into the prerelease branch.
4. `npm run local-release` - builds, checks and publishes the prerelease on NPM - you have to
   be an authorised publisher on NPM, and to enter an OTP from an Authenticator app to proceed.
   This script will automatically handle building docs and committing any necessary changes.

Now, everything will be on the git origin server and NPM, published as `1.N.0-next.M` where `N`
and `M` are some version number.

### Public release

Once we're at a point where we want to make our prerelease public, we need to:

- exit prerelease mode
- ensure our code is exactly as we want to publish
- publish it on NPM
- merge any changes back to main (there will be some changes to remove changeset files, etc.)
- reset the `release` branch to this current state

We do this by:

1. `npm run exit-prerelease` - updates version numbers, removes changset files, updates changeset
   meta, etc.
2. Check the contents of the repo. We _might_ need to manually update the CHANGELOG.md here to
   remove prerelease notes. If so, change, commit and push.
3. `npm run local-release` - publishes the current state to NPM
4. Check again for any metadata changes made by the release process (e.g. `pre.json` like in step
   6 in the Prerelease section above), commit and push.
5. `git ch release && git reset --hard prerelease && git push --force` - transfer all changes from
   `prerelease` to `release`, which is effectively just publishing the docs.
6. Raise and merge a PR from `prerelease -> main` to incorporate changeset removals and metadata
   changes.

Now, what we have is:

- the `release` branch contains what we have just published, and will have published the docs by
  GitBook sync.
- the `prerelease` branch is ready to enter a new prerelease and start the process again
- the `main` branch has had the released changeset files removed, version numbers updated etc. so
  is ready to receive more changes that can be cherry-picked into the next release.
