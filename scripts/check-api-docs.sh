#!/bin/bash

# Check if generated docs are up to date
# This script compares the generated docs (TypeDoc output in docs/ and the
# LLM-facing reference llms-full.txt) to the committed versions and fails if
# there are any differences

if git diff --exit-code --quiet docs llms-full.txt; then
  echo "Generated docs are up to date."
  exit 0
else
  echo "Error: generated docs are out of date. Please run npm run build and commit the changes."
  echo "Changed files:"
  git diff --name-only docs llms-full.txt | cat
  exit 1
fi
