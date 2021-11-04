#!/bin/bash

# Recreate the individual page markdown files from the master document
# in src/book.md

cd "$(dirname "$0")/../src"

rm -rf md/pages/
../bin/split.awk book.md
