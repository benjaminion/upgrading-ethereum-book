#!/bin/bash

# Spell check the book source, supplied as $1, exceptions are in the file $2.
#
# We make an effort to preserve line numbers in the input. This works best if the input lines
# are prefixed with "^ ".
#
# Aspell has input filters for markdown etc, but it's honestly easier just to preprocess stuff
# myself via the $FILTER script.

read -d '' FILTER << 'EOF'
# Strips markdown stuff from the input file to prepare for spell checking.
# To preserve line numbers, we keep all lines and prefix every output line with a `^`

BEGIN {
    # Used for skipping code blocks
    in_code = 0
    in_math = 0
}

# Don't look inside code blocks
/^```/ {
    in_code = 1 - in_code
    print "^"
    next
}

in_code {
    # output a blank line to preserve line numbers
    print "^"
    next
}

# Don't look inside math blocks
/^\\$\\$/ {
    in_math = 1 - in_math
    print "^"
    next
}

in_math {
    # output a blank line to preserve line numbers
    print "^"
    next
}

# Literal blocks with indentation. Take care to preserve indented lists.
/^    [ ]*[^-]/ {
    print "^"
    next
}

{
    # Footnote links
    gsub(/\\[\\^[^]]+\\]:?/, "")

    # Markdown link stuff
    gsub(/^\\[/, "")
    gsub(/[ !"\\(]\\[/, " ")
    gsub(/\\]\\([^)]+\\)/, "")

    # Backticked text
    gsub(/`[^`]+`/, "")

    # Inline maths
    gsub(/\\$[^\\$]+\\$/, "")

    # Title lines
    gsub(/^#+ /, "")

    # HTML comments (assume only one per line)
    gsub(/<!-- .* -->/, "")

    # HTML tags
    gsub(/<[^>]+>/, "")

    # HTML entities
    gsub(/&[^;]+;/, " ")

    print "^ " $0
}
EOF

awk -e "$FILTER" $1 \
    | aspell --dont-suggest pipe -d en_GB-ise-w_accents \
    | tail -n +2 \
    | awk 'BEGIN {n=1} /^$/{n++} /^..+$/{print "Line " n ": "$2}' \
    | grep -vwf $2


# The following mess allows us to handle the return from grep ("1" is not an error!)
r=("${PIPESTATUS[@]}")
(( ${r[0]} )) && exit ${r[0]}
(( ${r[1]} )) && exit ${r[1]}
(( ${r[2]} )) && exit ${r[2]}
(( ${r[3]} )) && exit ${r[3]}
(( ${r[4]} )) && (( ${r[4]} != 1 )) && exit ${r[4]}

exit 0
