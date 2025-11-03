#!/usr/bin/perl

# Finds internal links that do not point to existing anchors.
#
# Anchors may be
#  1. Full page paths: /part3/introduction
#  2. Headings or <a id="..."></a> elements: #introduction
#  3. A combination: /part3/introduction#introduction
#
# Relative page paths are not supported.
#
# Anchors generated from headings have some rules. See integrations/my_autolink_headings.js
#  - Converted to lower case
#  - Spaces become "-"
#  - Special characters are omitted: ".,?:'`/[]()" and probably others
#  - Underscores and dashes are retained.
#
# Other checks:
#  - Footnote references have corresponding definitions and vice versa.
#  - Linked image files exist.

use strict;
use warnings;

$\ = "\n"; # set output record separator

my $filePath = shift;
die "Usage: $0 FILEPATH [FILE]\n" if not $filePath;

# Read stdin or file to in-memory array
my @lines = <>;

my $domainMatch = qr/(localhost|eth2book.info|upgrading-ethereum.info)/;
my $newPagePath = qr/^(#{1,3} ).* <!-- ([^*]+)\*? -->$/;
my $pagePath;

my %anchors = (
    '/contents/' => 1,
    '/annotated-spec/' => 1,
    );
my %fns;

# First pass: build lists of anchors and footnotes
my $inCode = 0;
my $line = 0;
foreach (@lines) {

    $line++;

    $inCode = 1 - $inCode if /^```/;
    next if $inCode;

    # Add pages
    if (/$newPagePath/) {
        $pagePath = $2;
        $pagePath =~ /\/$/ or print "Page missing trailing /: $pagePath, line $line";
        $anchors{$pagePath} = 1;
    }

    # Add headings
    if (/^#+ (.*)$/) {
        my $name = $1 =~ s/\s+<!-- .* -->$//r;
        $name = lc $name;
        $name =~ s/\s+/-/g;
        $name =~ s/[^a-z0-9_-]//g;
        $anchors{$pagePath . '#' . $name} = 1;
    }

    # Add explicit anchors
    while (/<a id="(.+?)"><\/a>$/g) {
        $anchors{$pagePath . '#' . $1} = 1;
    }

    # Add footnote definitions
    $fns{$1} = $line if /^\[\^(.+?)\]:/;
}

$inCode and die "Error: unbalanced code block markers!";

# Second pass: check anchors and footnotes exist
$line = 0;
foreach (@lines) {

    $line++;

    /^```/ and $inCode = 1 - $inCode;
    next if $inCode;

    $pagePath = $2 if /$newPagePath/;

    # Footnote references
    while (/.\[\^(.+?)\]/g) {
        my $fn = $1;
        exists($fns{$fn}) and delete $fns{$fn} or print "Missing footnote: $fn, line $line";
    }

    while (/(!{0,1})\[.+?\]\((.*?)\)/g) {

        my $isImg = $1 eq '!';
        my $link = $2;

        if ($isImg) {
            unless(-e $filePath . $link) {
                print "Image file $link not found in $filePath: line $line";
            }
        } else {
            if ($link =~ /^\/\.\./) {
                if (!($link =~ /^...\/(latest|altair|bellatrix|capella|deneb)/)) {
                    print "Link to non-existent book version, line $line: $link";
                }
            } elsif ($link =~ /^([#\/])/) {
                my $anchor = ($1 eq '#') ? $pagePath . $link : $link;
                unless (exists($anchors{$anchor})) {
                    print "Anchor not found, line $line: $link";
                }
            } elsif ($link eq '') {
                print "Empty link, line $line";
            } elsif ($link =~ $domainMatch) {
                print "Link to $1, line $line"
            } elsif ($link =~ /^http:/) {
                print "HTTP link, line $line";
            } elsif (not $link =~ /^https:\/\//) {
                print "Suspicious link, line $line: $link";
            }
        }
    }
}

while (my($fn,$line) = each %fns) {
    print "Unreferenced footnote: $fn, line $line";
}
