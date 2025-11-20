#!/bin/bash

# Update the spellings list with all the current "mis-spellings"

here=$(dirname "$0")
wordlist=$here/../../src/spellings.en.pws
newlist=$(mktemp)

$here/make_spellings_list.sh > $newlist

diff $wordlist $newlist | tail -n +3

count=$(cat $newlist | wc -l)

# Add header line
echo "personal_ws-1.1 en $count utf-8" > $wordlist
cat $newlist >> $wordlist

rm $newlist
