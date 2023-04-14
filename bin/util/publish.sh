#!/bin/bash

version=bellatrix

echo
echo "*** Publishing to path $version ***"
echo

dir=$(dirname "$0")/../..

# Set the host variable
source $dir/bin/priv/server.sh

wait_for_input () {
    read -s < /dev/tty
}

echo "*** Building site..."

gatsby clean
gatsby build --prefix-paths

if [ $? -ne 0 ]
then
    echo "Error: gatsby build failed"
    exit 1
fi

echo "*** Building PDF..."
$dir/bin/pdf/make_pdf $dir/src/book.md

if [ $? -ne 0 ]
then
    echo "Error: pdf build failed"
    exit 1
fi

mv book.pdf $dir/public/

echo "*** Ready to upload - press [ENTER] to continue"
wait_for_input
tar zcf - public | ssh $host tar zxfC - eth2book

echo "*** Ready to install - press [ENTER] to continue"
wait_for_input
ssh $host eth2book/install_$version.sh
