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

# List only commits that haven't been cherry-picked
# --cherry-pick shows only commits that haven't been picked
# --right-only shows only commits from main
# --oneline for compact display
# --reverse to show oldest first (easier for cherry-picking in order)
git log --cherry-pick --right-only --oneline --reverse $CURRENT_BRANCH...origin/main | cat

echo
echo "These commits exist in main but not in $CURRENT_BRANCH"
echo "To cherry-pick a commit, use: git cherry-pick <commit-hash>" 
