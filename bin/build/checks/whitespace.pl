#!/usr/bin/perl -l

# Check given file for trailing whitespace

use strict;
use warnings;

my ($file) = @ARGV;
die "Usage: $0 FILE\n" if not $file;
open my $fh, '<', $file or die "Can't open $file: $!";

while(<$fh>) {
    print "Line $." if /\h$/;
}
