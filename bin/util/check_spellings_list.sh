#!/bin/bash

# Sanitise the spellings list by finding any unused entries

export LC_ALL=C.UTF-8

here=$(dirname "$0")
check=$here/../build/checks/spellcheck.sh
source=$here/../../src/book.md
wordlist=$here/../../src/spellings.en.pws

# Pre-requisite is to pass a normal spell check (no words missing)
output=$($check $source $wordlist)
[[ "$output" == "" ]] || {
    echo "Existing spelling errors need to be fixed:"
    echo "$output"
    exit 1
}

# Now spell check against an empty list and compare (no extra words)
missing=$(mktemp)

$here/make_spellings_list.sh > $missing

tail -n +2 $wordlist | diff $missing -

rm -f $missing
