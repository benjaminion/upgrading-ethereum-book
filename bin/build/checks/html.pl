#!/usr/bin/perl

# Checks that all HTML tags are balanced

use strict;
use warnings;

$\ = "\n"; # set output record separator

my @html_entities = ('ndash', 'nbsp', 'trade', 'ldquo', 'rdquo');
my %entities = map { $_ => 1 } @html_entities;

my $fh = *STDIN;
if (my $file = shift) {
    open $fh, '<', $file or die "Can't open $file: $!";
}

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

    pos($_) = 0;
    while (/&(.+?);/g) {
        if (!exists($entities{$1})) {
            print "Unknown HTML entity $1 at line $.";
        }
    }
}

for (@tags) {
    print "Unclosed tag found: <$_>";
}
