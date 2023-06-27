#!/usr/bin/perl -l

# Check given file or STDIN for trailing whitespace

use strict;
use warnings;

my $fh = *STDIN;
if (my $file = shift) {
    open $fh, '<', $file or die "Can't open $file: $!";
}

while(<$fh>) {
    print "Line $." if /\h$/;
}
