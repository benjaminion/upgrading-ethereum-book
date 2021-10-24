#!/bin/bash

cd "$(dirname "$0")/../src"

rm -rf md/pages/
../bin/split.awk book.md

