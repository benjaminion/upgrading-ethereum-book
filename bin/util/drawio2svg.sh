#!/bin/bash

# Export drawio diagrams to SVG files
#
# A drawio file can have multiple diagrams/tabs/pages. We extract them individually and
# make an SVG filename that includes the drawio basename and the diagram's tab name.
# The SVG files are written to the current working directory.

if [ -z "$1" ]; then
  echo "Usage: $0 <drawio_file>"
  exit 1
fi

drawio_file="$1"

if [[ $drawio_file != *.drawio ]]; then
  echo "Error: input file must have a .drawio extension"
  exit 1
fi

# Note that (as of 27.0.9 anyway) this doesn't work, and neither does --disable-update
export DRAWIO_DISABLE_UPDATE=true

drawio=/usr/bin/drawio
drawio_opts="-b 10 --svg-theme light"

root=$(basename -s '.drawio' $drawio_file)
names=$(grep -oP '<diagram[^>]*name="\K[^"]+' $drawio_file)

# If there is only one tab, we don't need to rename or page count
if [[ $(echo $names | wc -w) == 1 ]]; then
  $drawio $drawio_opts -x -o $names.svg $drawio_file
  exit 0
fi

# Loop over the diagrams and convert them individually
n=1
for name in $names; do
  $drawio $drawio_opts -x -p $n -o $root-$name.svg $drawio_file
  ((n++))
done
