#!/bin/sh

# Run the checks only if file `book.md` is staged
if git diff --exit-code -s --staged src/book.md
then
    exit 0
fi

# Run the pre-build checks on the book source
node --input-type=module -e 'import runChecks from "./bin/build/prebuild.js"; runChecks()'

if [ "$?" != "0" ]
then
    echo "\nError: Not committing due to failed checks.\n" >&2
    exit 1
fi
