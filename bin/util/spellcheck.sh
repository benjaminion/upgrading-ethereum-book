#!/bin/bash

./spellcheck.awk $1 | aspell list | grep -vxf ./my_words.txt | sort -u
