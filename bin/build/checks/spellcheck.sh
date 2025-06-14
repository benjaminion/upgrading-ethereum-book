#!/bin/bash

# Spell check the book source, supplied as $1 (or stdin), exceptions are in the file $2.
#
# Aspell has input filters for markdown etc, but it's honestly easier just to preprocess stuff
# with the spellcheck_prep.pl script.

if [ "$#" -eq 1 ]; then
    input=/dev/stdin
    exceptions=$1
elif [ "$#" -eq 2 ]; then
    input=$1
    exceptions=$2
else
    echo "Usage: spellcheck.sh [markdown_file] exceptions_file"
    exit 1
fi

export LANG=en_GB.UTF-8
here=$(cd $(dirname "$0") && pwd)

$here/spellcheck_prep.pl $input \
    | aspell --home-dir . -p $exceptions --dont-suggest pipe --dict-dir=$here/../dicts -d en_GB-ise-w_accents \
    | tail -n +2 \
    | awk 'BEGIN {n=1} /^$/{n++} /^..+$/{print "Line " n ": "$2}'
