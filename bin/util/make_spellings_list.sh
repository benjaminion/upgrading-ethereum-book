#!/bin/bash

# Make a fresh spellings list

export LC_ALL=C.UTF-8

here=$(dirname "$0")
check=$here/../build/checks/spellcheck.sh
source=$here/../../src/book.md

# aspell will also match 'randao' with both 'Randao' and 'RANDAO' and I don't know how
# to stop it. The following emulates this to avoid superfluous entries in the list.
$check $source /dev/null | awk '{print $3}' | sort -fr | awk '!seen[tolower($0)]++' | tac
