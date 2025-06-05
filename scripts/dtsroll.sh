#!/bin/bash

# Exit on any error
set -e

# Find controller files in dist directory
CONTROLLER_FILES=$(find dist -name "controller-*.d.ts" ! -name "controller-bundled.d.ts")

# Count the number of files found
FILE_COUNT=$(echo "$CONTROLLER_FILES" | grep -c "^" || true)

# Check if exactly one file was found
if [ "$FILE_COUNT" -ne 1 ]; then
    echo "Error: Expected exactly one controller-*.d.ts file, but found $FILE_COUNT"
    exit 1
fi

# Copy the file to controller-bundled.d.ts
cp "$CONTROLLER_FILES" "dist/controller-bundled.d.ts"

# Run dtsroll on the bundled file
npx dtsroll "dist/controller-bundled.d.ts"

# Check if the bundled file starts with import
if grep -q "^import" "dist/controller-bundled.d.ts"; then
    echo "Error: Bundled file still contains imports at the start"
    exit 1
fi

echo "✨ Successfully bundled controller types into dist/controller-bundled.d.ts"
