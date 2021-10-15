#!/bin/bash

cd "$(dirname "$0")/../src"

rm markdown-pages/part_*.md
../bin/split.awk book.md

