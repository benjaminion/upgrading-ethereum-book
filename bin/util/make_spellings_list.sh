#!/bin/bash

# Make a fresh spellings list

export LC_ALL=C.UTF-8

here=$(dirname "$0")
check=$here/../build/checks/spellcheck.sh
source=$here/../../src/book.md

$check $source /dev/null | awk '{print $3}' | sort -u
