#!/bin/bash

# Spell check the book source, supplied as $1, exceptions are in the file $2.
#
# Aspell has input filters for markdown etc, but it's honestly easier just to preprocess stuff
# with the spellcheck_prep.pl script.

export LANG=en_GB.UTF-8

$(dirname "$0")/spellcheck_prep.pl $1 \
    | aspell --dont-suggest pipe -d en_GB-ise-w_accents \
    | tail -n +2 \
    | awk 'BEGIN {n=1} /^$/{n++} /^..+$/{print "Line " n ": "$2}' \
    | grep -vwf $2

# The following mess allows us to handle the return from grep ("1" is not an error!)
r=("${PIPESTATUS[@]}")
(( ${r[0]} )) && exit ${r[0]}
(( ${r[1]} )) && exit ${r[1]}
(( ${r[2]} )) && exit ${r[2]}
(( ${r[3]} )) && exit ${r[3]}
(( ${r[4]} )) && (( ${r[4]} != 1 )) && exit ${r[4]}

exit 0
