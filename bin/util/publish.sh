#!/bin/bash

version=capella

wait_for_input () {
    read -s < /dev/tty
}

was_it_ok () {
    if [ $1 -ne 0 ]
    then
        echo "Exiting: $2 failed."
        exit 1
    fi
}

echo
echo "*** Publishing to path $version ***"

cd $(dirname "$0")/../..

# Set the host variable
source bin/priv/server.sh

echo
echo "*** Patching node modules ***"

npx patch-package --error-on-fail
was_it_ok $? "patch-package"

echo
echo "*** Building site..."

gatsby clean
gatsby build --prefix-paths
was_it_ok $? "gatsby build"

echo
echo "*** Building PDF..."
bin/pdf/make_pdf src/book.md
was_it_ok $? "make_pdf"

mv book.pdf public/

echo
echo "*** Ready to upload - press [ENTER] to continue"
wait_for_input
tar zcf - public | ssh $host tar zxfC - eth2book

echo
echo "*** Ready to install - press [ENTER] to continue"
wait_for_input
ssh $host eth2book/install_$version.sh
