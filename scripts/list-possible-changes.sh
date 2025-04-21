#!/bin/bash

# Exit on error
set -e

# Fetch latest changes
echo "Fetching latest changes..."
git fetch origin

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Looking for changes that could be cherry-picked from main into $CURRENT_BRANCH..."
echo

# Get all cherry-picked commit hashes from current branch's commit messages
# and truncate them to the short form (first 7 characters)
PICKED_COMMITS=$(git log $CURRENT_BRANCH --format=%B | grep -o "cherry picked from commit [a-f0-9]\{40\}" | cut -d' ' -f5 | cut -c1-7 | sort -u | tr '\n' '|' | sed 's/|$//')

# List only commits that haven't been cherry-picked
# --cherry-pick shows only commits that haven't been picked
# --right-only shows only commits from main
# --oneline for compact display
# --reverse to show oldest first (easier for cherry-picking in order)
if [ -n "$PICKED_COMMITS" ]; then
    git log --cherry-pick --right-only --oneline --reverse $CURRENT_BRANCH...origin/main | grep -v -E "$PICKED_COMMITS" | cat
else
    git log --cherry-pick --right-only --oneline --reverse $CURRENT_BRANCH...origin/main | cat
fi

echo
echo "These commits exist in main but not in $CURRENT_BRANCH"
echo "To cherry-pick a commit, use: git cherry-pick -x <commit-hash>"
echo "Using -x will record the source commit hash, which helps this script track what's been picked" 
