#!/usr/bin/perl

# Check the book source for repeated words, a common typo of mine.

use strict;
use warnings;

$\ = "\n"; # set output record separator

my $fh = *STDIN;
if (my $file = shift) {
    open $fh, '<', $file or die "Can't open $file: $!";
}

while(<$fh>) {
    while (/\b([_[:alpha:]]+)\s+(\1)\b/g) {
        print "Line $.: $1 $2";
    }
}
