#!/usr/bin/perl

# Add trailing slashes to all internal URLs and page paths.
# It ought to be idempotent.

use strict;
use warnings;

my ($file) = @ARGV;
die "Usage: $0 FILE\n" if not $file;
open my $fh, '<', $file or die "Can't open $file: $!";

while(<$fh>) {

    # Add trailing slash to page paths if required
    s|^(#{1,3} .* <!-- [^*]+[^/*])(\*? -->)$|$1/$2|;
    
    # Add trailing slash to internal URLs if required
    s|(\[.+?\])\(/([^\)#]*[^/])((?:#.*?)?)\)|$1(/$2/$3)|g;

    print $_
}                
