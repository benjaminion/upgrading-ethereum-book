#!/bin/bash

# Check availability of external markdown links in the supplied document.

# Github severely rate limits unless you use your access creds.
github_secret=$(cat $(dirname "$0")/../priv/github.txt)

for x in $(grep -Pho '\(\Khttp[^)]+' $1 | sed 's/#.*$//g' | sort -u)
do
    echo $x;

    # Include credentials for github.com
    [[ "$x" =~ github.com ]] && creds="-u $github_secret" || creds=""

    # beaconcha.in and reddit don't like HEAD requests
    [[ "$x" =~ beaconcha.in || "$x" =~ reddit.com ]] && head="" || head="--head"

    res=$(curl $creds -Lo /dev/null --silent $head --write-out '%{http_code}\n' $x)

    if [ "200" -ne "$res" ]
    then
        echo "*** $res ***"
    fi
done
