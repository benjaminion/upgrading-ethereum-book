#!/usr/bin/gawk -f

# Builds a JSON index from a file of keywords
#
# ./index.awk words.txt ../src/book.md
#
# Should probably escape quotation marks in page_name and heading

BEGIN {
    ORS=""
}

# First pass: build list of things to index
FNR == NR {
    refs[$0] = ""
    next
}

# Record the current page
/(^# |^## |^### ).* <!-- .* -->$/ {
    page_name = gensub(/^#+ (.*) <!-- .* -->$/, "\\1", "1")
    page_path = gensub(/^#+ .* <!-- ([^*]+).? -->$/, "\\1", "1")
}

# Record the most recent anchor heading
/^#/ {
    heading = ""
    if ($0 ~ / <!-- .* -->$/) {
        heading = gensub(/^#+ (.*) <!-- .* -->$/, "\\1", "1")
    } else {
        heading = gensub(/^#+ (.*)$/, "\\1", "1")
    }
    gsub(/`/, "", heading)
    anchor = tolower(heading)
    gsub(/ /, "-", anchor)
    gsub(/[^a-z0-9_-]/, "", anchor)

    for (word in refs) {
        done[word] = 0
    }
}

# Skipping empty lines gives a nice speed-up
length {
    for (word in refs) {
        if (!done[word] && match($0, word)) {
            refs[word] = refs[word] "\"" page_path "#" anchor "\","
            heads[page_path "#" anchor] = "[\"" page_name   "\",\""  heading "\"]"
            done[word] = 1
        }
    }
}

END {
    print "{\"refs\":{"
    count = length(refs)
    for (word in refs) {
        count--
        references = refs[word]
        if (references) {
            #remove trailing commas
            sub(/,$/, "", references)
            print "\"" word "\":[" references "]"
            if (count) print "," 
        }
    }
    print "},\"heads\":{"
    count = length(heads)
    for (anchor in heads) {
        count--
        headings = heads[anchor]
        if (headings) {
            print "\"" anchor "\":" headings
            if (count) print "," 
        }
    }
    print    "}}"
}
