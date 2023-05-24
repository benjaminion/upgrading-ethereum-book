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
# Anchors generated from headings have some rules (imposed by Gatsby):
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
use Fcntl qw(SEEK_SET);

$\ = "\n"; # set output record separator

my ($file) = @ARGV;
die "Usage: $0 FILE\n" if not $file;
open my $fh, '<', $file or die "Can't open $file: $!";

my $newPagePath = qr/^(#{1,3} ).* <!-- ([^*]+)\*? -->$/;
my $filePath = $file =~ s|[^/]+$||r;
my $pagePath;
my $inCode;

my %anchors = (
    '/contents/' => 1,
    '/annotated-spec/' => 1,
    );
my %fns;

# First pass: build lists of anchors and footnotes
$inCode = 0;
while(<$fh>) {

    $inCode = 1 - $inCode if /^```/;
    next if $inCode;

    # Add pages
    if (/$newPagePath/) {
        $pagePath = $2;
        $pagePath =~ /\/$/ or print "Page missing trailing /: $pagePath, line $.";
        $anchors{$pagePath} = 1;
    }

    # Add headings
    if (/^#+ (.*)$/) {
        my $name = $1 =~ s/ <!-- .* -->$//r;
        $name = lc $name;
        $name =~ tr/ /-/;
        $name =~ tr/a-z0-9_-//cd;
        $anchors{$pagePath . '#' . $name} = 1;
    }

    # Add explicit anchors
    while (/<a id="(.+?)"><\/a>$/g) {
        $anchors{$pagePath . '#' . $1} = 1;
    }

    # Add footnote definitions
    $fns{$1} = $. if /^\[\^(.+?)\]:/;
}

$inCode and die "Error: unbalanced code block markers!";

# Reset position to start of file
seek $fh, $. = 0, SEEK_SET;

# Second pass: check anchors and footnotes exist
while(<$fh>) {

    /^```/ and $inCode = 1 - $inCode;
    next if $inCode;

    $pagePath = $2 if /$newPagePath/;

    # Footnote references
    while (/.\[\^(.+?)\]/g) {
        my $fn = $1;
        exists($fns{$fn}) and delete $fns{$fn} or print "Missing footnote: $fn, line $.";
    }

    while (/(!{0,1})\[.+?\]\((.*?)\)/g) {

        my $isImg = $1 eq '!';
        my $link = $2;

        if ($isImg) {
            unless(-e $filePath . $link) {
                print "Nonexistent image file: $link line $.";
            }
        } else {
            if ($link =~ /^([#\/])/) {
                my $anchor = ($1 eq '#') ? $pagePath . $link : $link;
                unless (exists($anchors{$anchor})) {
                    print "Anchor not found, line $.: $link";
                }
            } elsif ($link eq '') {
                print "Empty link, line $.";
            } elsif ($link =~ /localhost/) {
                print "Link to localhost, line $."
            } elsif ($link =~ /^http:/) {
                print "HTTP link, line $.";
            } elsif (not $link =~ /^https:\/\// and not $link =~ /\.\.\//) {
                print "Suspicious link, line $.: $link";
            }
        }
    }
}

while (my($fn,$line) = each %fns) {
    print "Unreferenced footnote: $fn, line $line";
}
