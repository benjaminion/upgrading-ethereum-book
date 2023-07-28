#!/bin/bash

# Apply a git commit to all branches

branches='altair bellatrix capella'

if [ $# -eq 0 ]; then
    echo "Usage: $0 <commit>"
    exit 1
fi

for branch in $branches;
do
    echo "*** Patching $branch"
    git switch $branch && git cherry-pick $1
done
