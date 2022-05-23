#!/usr/bin/gawk -f

BEGIN {
    # Used for skipping code blocks
    in_code = 0
    in_math = 0
}

# Don't look inside code blocks
/^```/ {
    in_code = 1 - in_code
    print ""
    next
}

in_code {
    # output a blank line to preserve line numbers
    print ""
    next
}

# Don't look inside math blocks
/^\$\$/ {
    in_math = 1 - in_math
    print ""
    next
}

in_math {
    # output a blank line to preserve line numbers
    print ""
    next
}

# Literal blocks by indentation
# TODO: this can also blat indented lists - how to fix?
/^    [ ]*[^-]/ {
    print ""
    next
}

{
    # Footnote links
    gsub(/\[\^[^]]+\]:?/, "")

    # Markdown link stuff
    gsub(/^\[/, "")
    gsub(/[ !"\(]\[/, " ")
    gsub(/\]\([^)]+\)/, "")

    # Literal text
    gsub(/`[^`]+`/, "")
    
    # Inline maths
    gsub(/\$[^\$]+\$/, "")

    # Title lines
    gsub(/^#+ /, "")

    # HTML comments (assume only one per line)
    gsub(/<!-- .* -->/, "")

    # HTML tags
    gsub(/<[^>]+>/, "")

    # HTML entities
    gsub(/&[^;]+;/, " ")

    print
}
