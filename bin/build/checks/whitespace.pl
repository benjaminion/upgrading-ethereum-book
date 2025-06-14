#!/usr/bin/perl -l

# Check given file or STDIN for trailing whitespace

use strict;
use warnings;

while(<>) {
    print "Line $." if /\h$/;
}
