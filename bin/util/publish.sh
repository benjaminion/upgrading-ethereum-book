#!/bin/bash

version=bellatrix

echo
echo "*** Publishing to path $version ***"
echo

# Set the host variable
source $(dirname "$0")/../priv/server.sh

wait_for_input () {
    echo "Press [ENTER] to continue"
    read -s < /dev/tty
}

gatsby clean
gatsby build --prefix-paths

if [ $? -ne 0 ]
then
    echo "gatsby build failed"
    exit 1
fi

wait_for_input
tar zcf - public | ssh $host tar zxfC - eth2book
wait_for_input
ssh $host eth2book/install_$version.sh
