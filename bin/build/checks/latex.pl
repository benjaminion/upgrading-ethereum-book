#!/usr/bin/perl

# Notes:
#  - Need to install run3: sudo apt-get install libipc-run3-perl
#  - chktex manual is here: https://www.nongnu.org/chktex/ChkTeX.pdf

use strict;
use warnings;
use IPC::Run3;

$\ = "\n"; # set output record separator

# Add any exclusions here by adding "-n#" where # is the warning number
# [Disable rule 3](https://tex.stackexchange.com/questions/529937/why-should-i-enclose-the-previous-parenthesis-with)
my @command = ["chktex", "-q", "-n3"];

# Specifically ignore some false positives.
my $ignore = qr/\$(\[1,r\))\$/;

my $latex = '';
my $inMath = 0;
while(<>) {

    chomp;

    if ($inMath and !(/^\$\$$/)) {
        $latex .= $_ . " % Source line $.\n";
    }

    if (/^\$\$$/) {
        $inMath = !$inMath;
        $latex .=  $inMath ? "\\[\n" : "\\]\n";
        next;
    }

    while (/(^|[^\\])(\$.+?\$)/g) {
        my $ltx = $2;
        if (!($ltx =~ $ignore)) {
            $latex .= $ltx . " % Source line $.\n";
        }
    }

    pos = 0;
    print "Unbalanced \$ on line $." if (() = /(^|[^\\])\$/g) % 2;
}

$inMath and print "Unbalanced \$\$ detected" or run3 @command, \$latex;
