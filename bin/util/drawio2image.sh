#!/bin/bash

# Export drawio diagrams to SVG files
#
# A drawio file can have multiple diagrams/tabs/pages. We extract them individually and
# make an SVG filename that includes the drawio basename and the diagram's tab name.
# The SVG files are written to the current working directory.

# Note that (as of 27.0.9 anyway) this doesn't work, and neither does --disable-update
export DRAWIO_DISABLE_UPDATE=true
drawio=/usr/bin/drawio

if [ $# -lt 2 ]; then
  echo "Usage: $0 <svg|pdf> <drawio_file> [tab_name]"
  exit 1
fi

ext="$1"
if [ "$ext" = "svg" ]; then
  drawio_opts="-b 10 --svg-theme light"
elif [ "$ext" = "pdf" ]; then
  drawio_opts="-b 10 --crop"
else
  echo "Error: specify svg or pdf output format"
  exit 1
fi

drawio_file="$2"
if [[ $drawio_file != *.drawio ]]; then
  echo "Error: input file must have a .drawio extension"
  exit 1
fi

page=""
if [ $# -gt 2 ]; then
    page="$3"
fi

errors=$(mktemp)
trap 'rm -f -- "$errors"' EXIT

root=$(basename -s '.drawio' $drawio_file)
names=$(grep -oP '<diagram[^>]*name="\K[^"]+' $drawio_file)

# If there is only one tab, we don't need to rename or page count
if [[ $(echo $names | wc -w) == 1 ]]; then
  echo "$drawio_file -> $names.$ext"
  $drawio $drawio_opts -x -o $names.$ext $drawio_file >/dev/null 2>$errors
  if [ $? -ne 0 ]; then
    cat $errors
    exit 1
  fi
  exit 0
fi

# Loop over the diagrams and convert them individually
n=0
for name in $names; do
  ((n++))
  if [ "$page" != "" ] && [ "$page" != "$name" ]; then
      continue
  fi
  echo "$drawio_file[$name] -> $root-$name.$ext"
  $drawio $drawio_opts -x -p $n -o $root-$name.$ext $drawio_file >/dev/null 2>$errors
  if [ $? -ne 0 ]; then
    cat $errors
    exit 1
  fi
done
