#!/usr/bin/perl

# Note: run this via "update.sh" rather than directly.
#
# Split the master markdown file into separate files for each page.
#
#  - Creates a directory structure reflecting the path hierarchy of the
#    pages.
#  - Prepends Gatsby frontmatter to each file.
#  - Rewrites links for image files so that the origial file can use
#    one path and the split files another.
#
# Rules:
#  - New pages can start at markdown heading levels 1, 2, or 3.
#  - To start a new page, append " <!-- /path/to/page -->" to the heading.
#  - The file containing the page will end up in "./md/pages/path/to/page.md"
#  - For the page to be marked "hidden", append a "*" to the path.

use strict;
use warnings;
use File::Path qw(make_path);

$, = "\n"; # set output field separator
$\ = "\n"; # set output record separator

my $outFilePrefix = 'md/pages';
my $sequence = 0; # Search is -2, Contents is -1
my $thisPart = '';
my $thisChapter = '';
my $thisSection = '';
my $thisPartNo = -1; # Number parts from 0
my $thisChapterNo = 0;
my $thisSectionNo = 0;
my $thisPath;
my $idx;
my $ofh;

while (<>)  {

    chomp;
    
    if (/^(#{1,3} )(.*) <!-- ([^*]*)(\*?) -->$/) {

        my $level = $1;
        my $title = $2;
        my $path = $3;
        my $hide = $4 eq '*' ? 'true' : 'false';

        $sequence++;

        my $outFile = $outFilePrefix . $path . '.md';
        my $outDirectory = $outFile =~ s|/[^/]+$||gr;

        unless(-e $outDirectory or make_path($outDirectory)) {
            die "Unable to create $outDirectory\n";
        }

        close $ofh if defined $ofh;
        open $ofh, '>', $outFile or die "Can't open $outFile for writing: $!";

        $thisPath = $path;
        if ($level eq '# ') {
            $thisPart = $title;
            $thisChapter = '';
            $thisSection = '';
            $thisPartNo++;
            $thisChapterNo = 0;
            $idx = $thisPartNo;
        } elsif ($level eq '## ') {
            $thisChapter = $title;
            $thisSection = '';
            $thisChapterNo++;
            $thisSectionNo = 0;
            $idx = $thisPartNo . ',' . $thisChapterNo;
        } elsif ($level eq '### ') {
            $thisSection = $title;
            $thisSectionNo++;
            $idx = $thisPartNo . ',' . $thisChapterNo . ',' . $thisSectionNo;
        } else {
            die "Internal error: can't determine heading level.";
        }

        print $ofh
            "---",
            "hide: $hide",
            "path: $path/",
            "titles: [\"$thisPart\",\"$thisChapter\",\"$thisSection\"]",
            "index: [$idx]",
            "sequence: $sequence",
            "---";

        if ($thisSection ne '') {
            print $ofh
                "\n<div class=\"section-header\">\n",
                "# $thisPart\n",
                "## $thisChapter",
                "\n</div>\n",
                "### $thisSection";
        } elsif ($thisChapter ne '') {
            print $ofh
                "\n<div class=\"chapter-header\">\n",
                "# $thisPart",
                "\n</div>\n",
                "## $thisChapter";
        } else {
            print $ofh "# $thisPart";
        }

    } else {

        die "Error: first line of input must be a new page marker" if not defined $ofh;

        print $ofh $_;
    }
}

close $ofh if defined $ofh;
