#!/usr/bin/perl

# Split out the annotated spec chapter as a single page doc and update links
#
# Sends output to stdout

use strict;
use warnings;

$, = "\n"; # set output field separator
$\ = "\n"; # set output record separator

my $inPart3 = 0;

print
    "---",
    "path: /annotated-spec/",
    "titles: [\"One Page Annotated Spec\",\"\",\"\"]",
    "index: [999]",
    "sequence: 990",
    "---";

while(<>)  {

    last if /<!-- \/part4 -->/;
    
    chomp;

    if (/<!-- \/part3 -->/) {
        $inPart3 = 1;
        print
            "# One Page Annotated Spec\n",
            "**Note:** This page is automatically generated from the chapters in [Part 3](/part3). You may find that some internal links are broken.";
        next;
    }

    if ($inPart3) {

        # Remove page path comments from titles
        s/^(#.*) <!--.*-->$/$1/;

        # Rewrite links to images
        if ($_ =~ /!\[.*\]\(md.+\)/) {
            s/md\///;
        }

        # Rewrite urls that are internal to the chapter
        s/]\(\/part3\/[^#)]*/](/g;

        print $_
    }
}
