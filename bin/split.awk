#!/usr/bin/gawk -f

BEGIN{
    n = 0
    filename_prefix = "markdown-pages/pages"
    filename = filename_prefix "/error.md"
    h_part = ""
    h_chapter = ""
    h_part_no = -1 # Number parts from 0
    h_chapter_no = 0
    h_section_no = 0
}

# Headings with an HTML comment at the end trigger a new page
/^(# |## |### ).* <!-- .* -->$/ {

    # Start a new page
    if (n > 0) {
        close (filename)
    }
    n++

    # Generate frontmatter contents
    name = gensub("^#+ (.*) <!-- .* -->$", "\\1", "1", $0)
    h_path = gensub("^#+ .* <!-- (.*) -->$", "\\1", "1", $0)
    heading = gensub ("^(#+ .*) <!-- .* -->$", "\\1", "1", $0)

    # Is this page hidden?
    if (h_path ~ /\*$/) {
        h_path = substr(h_path, 1, length(h_path) - 1)
        h_hide = "true"
    } else {
        h_hide = "false"
    }

    # Make filesystem path for writing the file
    file_path = h_path
    sub(/\/[^/]+$/, "", file_path)
    system("mkdir -p " filename_prefix file_path " 2>/dev/null")
    filename = filename_prefix h_path ".md"

    print filename
        
    switch ($0) {
    case /^# /:
        h_part = name
        h_chapter = ""
        h_section = ""
        h_part_no++
        h_chapter_no = 0
        idx = h_part_no
        break
    case /^## /:
        h_chapter = name
        h_section = ""
        h_chapter_no++
        h_section_no = 0
        idx = h_part_no "," h_chapter_no
        break
    case /^### /:
        h_section = name
        h_section_no++
        idx = h_part_no "," h_chapter_no "," h_section_no
        break
    default:
        print "Internal error"
        exit (1)
    }
    print "---" > filename
    print "hide: " h_hide > filename
    print "path: " h_path > filename
    print "titles: [\"" h_part "\",\"" h_chapter "\",\"" h_section "\"]" > filename
    print "index: [" idx "]" > filename
    print "sequence: " n > filename
    print "---" > filename
    print heading > filename

    next
}

# Rewrite image paths to reflect the directory hierarchy
/<img src=\"markdown-pages.*\"/ {
    prefix = substr(h_path, 2)
    gsub(/[^/]*/, "..", prefix)
    sub(/src=\"markdown-pages/, "src=\"" prefix, $0)
    print > filename

    next
}

# Pass through everything else as-is
{
    print > filename
}
