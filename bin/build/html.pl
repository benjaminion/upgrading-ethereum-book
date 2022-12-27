#!/usr/bin/perl

# Checks that all HTML tags are balanced

use strict;
use warnings;

$\ = "\n"; # set output record separator

my ($file) = @ARGV;
die "Usage: $0 FILE\n" if not $file;
open my $fh, '<', $file or die "Can't open $file: $!";

my @tags = ();

while(<$fh>) {
    while (/<(\/{0,1})([a-z]+).*?(\/{0,1})>/g) {
        my $thisTag = $2;
        my $isOpeningTag = $1 ne "/";
        my $isSelfClosed = $3 eq "/";
        
        # Ignore self-closed tags
        next if $isSelfClosed;

        if ($isOpeningTag) {
            push(@tags, $thisTag);
        } else {
            if (@tags) {
                my $tag = pop(@tags);
                if ($thisTag ne $tag) {
                    print "Expected: </$tag>, at line $., got </$thisTag>";
                }
            } else {
                print "Expected no tag at line $., got </$thisTag>";
            }
        }
    }
}

for (@tags) {
    print "Unclosed tag found: <$_>";
}
