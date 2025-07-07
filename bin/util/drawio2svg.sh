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

drawio_opts="-b 10 --svg-theme light"

root=$(basename -s '.drawio' $drawio_file)
names=$(grep -oP '<diagram[^>]*name="\K[^"]+' $drawio_file)

# If there is only one tab, we don't need to rename or page count
if [[ $(echo $names | wc -w) == 1 ]]; then
  drawio -x $drawio_opts -o $root.svg $drawio_file
  exit 0
fi

# Loop over the diagrams and convert them individually
n=1
for name in $names; do
  drawio -x -p $n $drawio_opts -o $root-$name.svg $drawio_file
  ((n++))
done
