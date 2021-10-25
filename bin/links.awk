#!/usr/bin/gawk -f

#
# Remember to pass the target file twice:
#
#   ../bin/links.awk book.md book.md
#

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
        gsub(/ /, "-", name)
        gsub(/[.,?:'`/[\]()]/, "", name)
        name = tolower(name)
        
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

# Second pass: check anchors exist
{
    # There may be multiple anchors on the line
    # This mess matches non-greedy [foo](#bar) and [foo](/a/b/c#xyz) etc.
    while (match($0, /\[[^]]+\]\([#/][^)]+\)/)) {

        # Workaround for awk's greediness. Otherwise we just get the last match per line.
        partial = substr($0, RSTART, RLENGTH)
        name = gensub(/\[[^]]+\]\(([#/][^)]+)\)/,  "\\1", "1", partial)

        # Full paths start with "/", paths to the same page with "#". We do not use relative ".." paths.
        if (name ~ /^#/) {
            anchor = path name
        } else {
            anchor = name
        }

        if (anchors[anchor] != 1) {
            print("Anchor not found, line " FNR ": " name)
        }

        $0 = substr($0, RSTART + RLENGTH)
    }
}
