#!/bin/bash

# Check if API docs are up to date
# This script compares the generated docs to the committed docs
# and fails if there are any differences

if git diff --exit-code --quiet docs; then
  echo "API docs are up to date."
  exit 0
else
  echo "Error: API docs are out of date. Please run npm run build:docs and commit the changes."
  echo "Changed files:"
  git diff --name-only docs | cat
  exit 1
fi
