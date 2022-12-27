#!/bin/bash

# Recreate the individual page markdown files from the master document
# in src/book.md

cd "$(dirname "$0")/../../src"

# Build the markdown pages
rm -rf md/pages/
../bin/build/split.pl ../$1

# Build the one page annotated spec
rm -f md/annotated.md
../bin/build/annotated.pl ../$1 > md/annotated.md
