#!/bin/bash

#
# Check availability of external markdown links in the supplied document.
#

if [ $# -eq 0 ]; then
    echo "Usage: $0 <filename.md>"
    exit 1
fi

if [ ! -f "$1" ]; then
    echo "Error: Cannot read $1"
    exit 1
fi

markdown_file=$1

# Number of concurrent checks
npara=8

# Timeout in seconds
timeout=10

# Github severely rate limits unless you use your access creds.
github_secret=$(cat $(dirname "$0")/../priv/github.txt)

# File to store non-200 URLs
non_200_urls_tmp=$(mktemp)

# Where to find the book itself (for relative links that are really absolute)
selfserver=https://eth2book.info

# Function to check a single URL
check_url() {
    x="$1"
    echo $x;

    # Include credentials for github.com
    [[ "$x" =~ github.com ]] && creds="-u $github_secret" || creds=""

    # beaconcha.in, twitter and reddit don't like HEAD requests
    [[ "$x" =~ beaconcha.in || "$x" =~ reddit.com || "$x" =~ twitter.com ]] && head="" || head="--head"

    res=$(curl $creds -Lo /dev/null --max-time $timeout --silent $head --write-out '%{http_code}\n' $x)

    if [ "200" -ne "$res" ]
    then
        echo "*** $res ***"
        echo "$res $x" >> $non_200_urls_tmp
    fi
}

export -f check_url
export timeout github_secret non_200_urls_tmp

# Extract URLs and pass them to check_url function in parallel
cat $markdown_file \
    | sed "s|(/\.\.|($selfserver|g" \
    | grep -Pho '\(\Khttp[^)]+' \
    | sed 's/#.*$//g' \
    | sort -u \
    | xargs -P $npara -I {} bash -c 'check_url "$@"' _ {}

# Print non-200 URLs
exit_code=0
echo
if [ -s $non_200_urls_tmp ]
then
    echo "*** Failing URLs: ***"
    cat $non_200_urls_tmp
    exit_code=1
else
    echo "*** All URLs are good ***"
fi

rm $non_200_urls_tmp
exit $exit_code
