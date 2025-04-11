#!/bin/bash

# Exit on error
set -e

# Check for dry run option
DRY_RUN=false
if [ "$1" = "--dry-run" ]; then
    DRY_RUN=true
    echo "Running in dry-run mode..."
fi

# Check if we're on the prerelease branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "prerelease" ]; then
    echo "Error: Must be on prerelease branch"
    exit 1
fi

# Check for clean git state
if [ -n "$(git status --porcelain)" ]; then
    echo "Error: Working directory is not clean. Please commit or stash your changes."
    exit 1
fi

# Check if there are any unpulled changes
git fetch origin
if [ "$(git rev-list HEAD..origin/prerelease --count)" != "0" ]; then
    echo "Error: Local branch is behind origin/prerelease. Please pull changes first."
    exit 1
fi

# Run CI checks
echo "Running CI checks..."
npm run ci

# Version the changesets
echo "Versioning changesets..."
npx changeset version

# Build docs again to include changelog
echo "Building docs..."
npm run build:docs

# Check for changes in docs and pre.json
ALLOWED_CHANGES=$(git diff --name-only | grep -E "^docs/|^\.changeset/pre\.json$" || true)
DISALLOWED_CHANGES=$(git diff --name-only | grep -vE "^docs/|^\.changeset/pre\.json$" || true)

if [ -n "$DISALLOWED_CHANGES" ]; then
    echo "Error: Unexpected changes detected in files:"
    echo "$DISALLOWED_CHANGES"
    exit 1
fi

if [ -n "$ALLOWED_CHANGES" ]; then
    echo "Committing documentation and pre.json updates..."
    git add docs/ .changeset/pre.json
    git commit -m "Update prerelease docs/meta"
fi

if [ "$DRY_RUN" = true ]; then
    echo "Dry run completed. Stopping before publish and push."
    exit 0
fi

# Publish changesets
echo "Publishing changesets..."
npx changeset publish

# Push changes and tags
echo "Pushing changes and tags..."
git push --follow-tags

echo "Prerelease process completed successfully!"
