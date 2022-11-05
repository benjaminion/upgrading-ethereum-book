#!/bin/bash

# Run LTeX grammar checker: https://valentjn.github.io/ltex/index.html

ltex=~/bin/ltex-ls-15.2.0/bin/ltex-cli
config=$(dirname "$0")/ltex_config.json
temp=$(mktemp /tmp/ltex_XXXXXXXX.md)

# Image links seems to cause a problem for LTeX, so strip them
cat $1 | sed 's/^!\[.*$//' > $temp

$ltex --client-configuration=$config $temp | sed "s:^$temp:\n$1:"

rm -f $temp
