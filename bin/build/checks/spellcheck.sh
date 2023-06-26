#!/bin/bash

# Spell check the book source, supplied as $1, exceptions are in the file $2.
#
# Aspell has input filters for markdown etc, but it's honestly easier just to preprocess stuff
# with the spellcheck_prep.pl script.

export LANG=en_GB.UTF-8

$(dirname "$0")/spellcheck_prep.pl $1 \
    | aspell --home-dir . -p $2 --dont-suggest pipe -d en_GB-ise-w_accents \
    | tail -n +2 \
    | awk 'BEGIN {n=1} /^$/{n++} /^..+$/{print "Line " n ": "$2}'
