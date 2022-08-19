#!/bin/bash

# Sanitise the spellings list by finding any unused entries

here=$(dirname "$0")
check=$here/../build/spellcheck.sh
source=$here/../../src/book.md
wordlist=$here/../../src/spellings.txt

# Pre-requisite is to pass a normal spell check (no words missing)
output=$($check $source $wordlist)
[[ "$output" == "" ]] || {
    echo "Existing spelling errors need to be fixed:"
    echo "$output"
    exit 1
}

# Now spell check against an empty list and compare (no extra words)
missing=$(mktemp)

$check $source /dev/null | awk '{print $3}' | sort -u > $missing

diff $missing $wordlist

rm -f $missing
