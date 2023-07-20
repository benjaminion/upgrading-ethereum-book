#!/bin/bash

here=$(dirname "$0")

src=$here/../../src
pdf=$here/../../book.pdf

bytes=$(cat $src/book.md | wc -c)
footnotes=$(grep '^\[^.*\]:' $src/book.md | wc -l)
words=$($here/../build/checks/spellcheck_prep.pl $src/book.md | sed 's/^^ //' | wc -w)
pages=$(pdfinfo $pdf | grep '^Pages' | awk '{print $2}')
external=$(cat $src/book.md | grep -Pho '\(\Khttp[^)]+' | sed 's/#.*$//g' | sort -u | wc -l)
internal=$(cat $src/book.md | grep -Pho '\(\K/[^)]+' | wc -l)
charts=$(ls $src/images/charts/*.svg | wc -l)
diagrams=$(ls $src/images/diagrams/*.svg | wc -l)

echo Bytes: $bytes
echo Words: $words
echo Pages: $pages
echo Images: $((charts + diagrams))
echo Internal links: $internal
echo External pages: $external
echo Footnotes: $footnotes
