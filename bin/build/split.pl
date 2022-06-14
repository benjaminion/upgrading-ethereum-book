#!/usr/bin/perl

use strict;
use warnings;
use Fcntl qw(SEEK_SET SEEK_CUR SEEK_END);
use File::Path qw(make_path);

my ($file) = @ARGV;
die "Usage: $0 FILE\n" if not $file;

open my $fh, '<', $file or die "Can't open $file: $!";

my $outFilePrefix = 'md/pages';
my $sequence = 0;
my $thisPart = '';
my $thisChapter = '';
my $thisSection = '';
my $thisPartNo = -1; # Number parts from 0
my $thisChapterNo = 0;
my $thisSectionNo = 0;
my $thisPath;
my $idx;
my $ofh;

while( my $line = <$fh>)  {

    if ($line =~ /^(#{1,3} )(.*) <!-- ([^*]*)(\*?) -->$/) {

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
        open $ofh, '>', $outFile or die "Can't open $file for writing: $!";

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
            "---\n",
            "hide: $hide\n",
            "path: $path\n",
            "titles: [\"$thisPart\",\"$thisChapter\",\"$thisSection\"]\n",
            "index: [$idx]\n",
            "sequence: $sequence\n",
            "---\n";

        if ($thisSection ne '') {
            print $ofh
                "\n<div class=\"section-header\">\n\n",
                "# $thisPart\n\n",
                "## $thisChapter\n",
                "\n</div>\n\n",
                "### $thisSection\n";
        } elsif ($thisChapter ne '') {
            print $ofh
                "\n<div class=\"chapter-header\">\n\n",
                "# $thisPart\n",
                "\n</div>\n\n",
                "## $thisChapter\n";
        } else {
            print $ofh "# $thisPart\n";
        }

    } else {

        die "Error: first line of input must be a new page marker" if not defined $ofh;

        # Rewrite any markdown image paths to reflect the directory hierarchy
        (my $prefix = substr $thisPath, 2) =~ s|[^/]+|..|g;
        $line =~ s/\(md/($prefix/;

        print $ofh $line;

    }
}

close $ofh if defined $ofh;
