#!/usr/bin/gawk -f

BEGIN{
    file_name_format = "markdown-pages/part_%03d.md"
    n = 0
    in_header = 0
    head_path = ""
    head_part = ""
    head_chapter = ""
    head_part_no = 0
    head_chapter_no = 0
    head_section_no = 0
}
{
    if ($0 ~ /^[[]new page .*]::/) {
        # Split into separate files at "[new page XXX]::"
        if (n > 0) {
            close (filename)
        }
        n++
        filename = sprintf(file_name_format, n)

        # Start a new header block for the markdown file
        head_path = gensub("^[[]new page (.*)]::", "path: \\1", "1", $0)
        print "---" > filename
        print head_path > filename
        in_header = 1
    } else if ($0 ~ /(^# |^## |^### )/) {
        if ($0 ~ /^# /) {
            head_part = gensub("^# (.*)$", "\\1", "1", $0)
            head_chapter = ""
            head_section = ""
            head_part_no++
            idx = head_part_no
        } else if ($0 ~ /^## /) {
            head_chapter = gensub("^## (.*)$", "\\1", "1", $0)
            head_section = ""
            head_chapter_no++
            head_section_no = 0
            idx = head_part_no "." head_chapter_no
        } else {
            head_section = gensub("^### (.*)$", "\\1", "1", $0)
            head_section_no++
            idx = head_part_no "." head_chapter_no "." head_section_no
        }
        if (in_header) {
            print "part: \"" head_part "\"" > filename
            print "chapter: \"" head_chapter "\"" > filename
            print "section: \"" head_section "\"" > filename
            print "index: \"" idx "\"" > filename
            print "---\n" > filename
            in_header = 0
        }
        print > filename
    } else if (n > 0) {
        # Skip anything before the first heading
        print > filename
    }
}
