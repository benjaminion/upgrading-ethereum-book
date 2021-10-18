#!/bin/bash

cd "$(dirname "$0")/../src"

rm -f markdown-pages/part_*.md
../bin/split.awk book.md

