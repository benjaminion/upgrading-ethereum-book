#!/bin/bash

# Export drawio diagrams to SVG files
#
# A drawio file can have multiple diagrams/tabs/pages. We extract them individually and
# make an SVG filename that includes the drawio basename and the diagram's tab name.

if [ -z "$1" ]; then
  echo "Usage: $0 <drawio_file>"
  exit 1
fi

drawio_file="$1"

if [[ $drawio_file != *.drawio ]]; then
  echo "Error: input file must have a .drawio extension"
  exit 1
fi

root=$(basename -s '.drawio' $drawio_file)
names=$(grep -oP '<diagram[^>]*name="\K[^"]+' $drawio_file)

n=1
for name in $names; do
  drawio -x -b 10 -p $n --svg-theme light -o $root-$name.svg $drawio_file
  ((n++))
done
