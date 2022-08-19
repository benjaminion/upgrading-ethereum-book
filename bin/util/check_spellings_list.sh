#!/bin/bash

# Sanitise the spellings list by finding any unused entries

check=$(dirname "$0")/../build/spellcheck.sh
source=../../src/book.md
words=../../src/spellings.txt

# Pre-requisite is to pass a normal spell check (no words missing)
output=$($check $source $words)
if [[ "$output" != "" ]]
then
    echo "Existing spelling errors need to be fixed:"
    echo $output
    exit 1
fi

# Now spell check against an empty list and save the output
tmpin=$(mktemp)
tmpout=$(mktemp)

$check $source $tmpin | awk '{print $3}' | sort -u >> $tmpout

diff $tmpout $words

rm -f $tmpin $tmpout
