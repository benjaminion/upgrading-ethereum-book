#!/usr/bin/gawk -f

# Finds internal links that do not point to existing anchors.
#
# Anchors may be
#  1. Full page paths: /part3/introduction
#  2. Headings or <a id="..."></a> elements: #introduction
#  3. A combination: /part3/introduction#introduction
#
# Relative page paths are not supported.
#
# Anchors generated from headings have some rules (imposed by Gatsby):
#  - Converted to lower case
#  - Spaces become "-"
#  - Special characters are omitted: ".,?:'`/[]()" and probably others
#  - Underscores and dashes are retained.
#
# Remember to pass the target file twice:
#
#   ../bin/build/links.awk book.md book.md
#

@load "filefuncs"

BEGIN {
    # /contents is OK as a page, but will not be picked up automatically
    anchors["/contents"] = 1
    # Ditto /annotated-spec
    anchors["/annotated-spec"] = 1

    # Used for skipping code blocks
    in_code = 0

    # For checking image links
    filepath = ARGV[1]
    gsub(/[^/]+$/, "", filepath)
}

# Path needs to be set on both passes
/(^# |^## |^### ).* <!-- .* -->$/ {
    path = gensub(/^#+ .* <!-- ([^*]+).? -->$/, "\\1", "1")

    # We can link to the page directly, without the anchor
    if (FNR == NR ) anchors[path] = 1
}

# First pass: build list of anchors
FNR == NR {

    # Headings
    if ($0 ~ /^#/) {
        name = ""
        if ($0 ~ / <!-- .* -->$/) {
            name = gensub(/^#+ (.*) <!-- .* -->$/, "\\1", "1")
        } else {
            name = gensub(/^#+ (.*)$/, "\\1", "1")
        }
        name = tolower(name)
        gsub(/ /, "-", name)
        gsub(/[^a-z0-9_-]/, "", name)
        
        anchors[path "#" name] = 1
        # print path "#" name
    }

    # Explicit anchors - only one per line allowed, at the start of the line
    if ($0 ~ /^<a id=".*"><\/a>$/) {
        name = gensub(/^<a id="(.*)"><\/a>$/, "\\1", "1")

        anchors[path "#" name] = 1
        # print path "#" name
    }
    
    next
}

#### Second pass

# Don't look inside code blocks
/^```/ {
    in_code = 1 - in_code
    next
}

in_code { next }

# Any empty links
/\[[^]]+\]\(\)/ {
    print "Empty link, line " FNR
}

# Anything pointing to localhost (oops)
/\[[^]]+\]\([^)]*localhost[^)]*\)/ {
    print "Link to localhost, line " FNR
}

# Check for existence of linked image files
/!\[[^]]+\]\([^)]+\)/ {
    imagelink = gensub(/!\[[^]]+\]\(([^)]+)\)/, "\\1", "1")
    if (stat(filepath imagelink, fdata) != 0) {
        print "Nonexistant image file: " imagelink ", line " FNR
    }
}

# Check anchors exist
{
    # There may be multiple anchors on the line
    # This mess matches non-greedy [foo](...)
    while (match($0, /\[[^]]+\]\([^)]+\)/)) {
        
        rstart = RSTART
        rlength = RLENGTH
        partial = substr($0, RSTART, RLENGTH)

        # Internal anchors start with "#" or "/"
        if (match(partial, /\[[^]]+\]\([#/][^)]+\)/)) {

            name = gensub(/\[[^]]+\]\(([#/][^)]+)\)/,  "\\1", "1", partial)

            # Full paths start with "/", paths to the same page with "#". We do not use relative ".." paths.
            if (name ~ /^#/) {
                anchor = path name
            } else {
                anchor = name
            }

            if (anchors[anchor] != 1) {
                print "Anchor not found, line " FNR ": " name
            }
        } else if (match(partial, /\[[^]]+\]\(https[^)]+\)/)) {
            # Do nothing
        } else if (match(partial, /\[[^]]+\]\(http[^)]+\)/)) {
            print "HTTP link, line " FNR
        } else if (match(partial, /\[[^]]+\]\(md\/images\/[^)]+\)/)) {
            # Do nothing - assume it's a well-formed image link
        } else {
            print "Suspicious link, line " FNR
        }

        $0 = substr($0, rstart + rlength)
    }
}
