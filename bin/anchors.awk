#!/usr/bin/gawk -f

# Output all eligible anchors in the document

BEGIN {
    # /contents is OK as a page, but will not be picked up automatically
    print "/contents"
    name = ""
}

/(^# |^## |^### ).* <!-- .* -->$/ {
    path = gensub(/^#+ .* <!-- ([^*]+).? -->$/, "\\1", "1")
    print path
}

# Headings
/^#/ {
    if ($0 ~ / <!-- .* -->$/) {
        name = gensub(/^#+ (.*) <!-- .* -->$/, "\\1", "1")
    } else {
        name = gensub(/^#+ (.*)$/, "\\1", "1")
    }
    name = tolower(name)
    gsub(/ /, "-", name)
    gsub(/[^a-z0-9_-]/, "", name)

    print path "#" name
}

# Explicit anchors - only one per line allowed, at the start of the line
/^<a id=".*"><\/a>$/ {
    name = gensub(/^<a id="(.*)"><\/a>$/, "\\1", "1")
    print path "#" name
}
    
