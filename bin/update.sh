#!/bin/bash

cd "$(dirname "$0")/../src"

rm -rf markdown-pages/pages/
../bin/split.awk book.md

