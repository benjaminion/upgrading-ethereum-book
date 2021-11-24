#!/usr/bin/gawk -f

# Split out the annotated spec chapter as a single page doc and update links
#
# Sends output to stdout

BEGIN {
    in_part_3 = 0

    print "---"
    print "path: /annotated-spec"
    print "titles: [\"One Page Annotated Spec\",\"\",\"\"]"
    print "index: [999]"
    print "---"
}

/<!-- \/part3 -->/ {
    in_part_3 = 1
}

/<!-- \/part4 -->/ {
    in_part_3 = 0
}

in_part_3 {

    # Change the chapter title
    if (in_part_3 == 1) {
        print "# One Page Annotated Spec"
        print ""
        print "**Note:** This page has been automatically generated from the chapters in [Part 3](/part3). You may find that some internal links are broken."
        in_part_3 = 2
        next
    }

    # Rewrite links to images
    if ($0 ~ /<img src="md.*"/) {
        sub(/src="md\//, "src=\"", $0)
    }

    # Rewrite urls that are internal to the chapter
    gsub(/]\(\/part3\/[^#)]*/, "](", $0)
    
    # Remove page path comments from titles
    if ($0 ~ /^#.*<!--/) {
        sub(/ <!--.*-->/, "", $0)
    }

    print
}
