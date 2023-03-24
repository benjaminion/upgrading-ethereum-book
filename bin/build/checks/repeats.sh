#!/bin/bash

# Check the book source, supplied as $1, for repeated words.

grep -Enoi '\b(\w+)\s+\1\b' $1 | awk 'BEGIN {FS="[: ]"} {print "Line " $1 ": " $2 " " $3}'

# The following allows us to handle the return from grep ("1" is not an error!)
r=("${PIPESTATUS[@]}")
(( ${r[0]} )) && (( ${r[0]} != 1 )) && exit ${r[0]}
exit ${r[1]}
