#!/bin/bash

version=$(git branch --show-current 2>/dev/null || echo 'unknown')

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

# echo
# echo "*** Patching node modules ***"
#
# npx custompatch
# was_it_ok $? "custompatch"

echo
echo "*** Building site..."

npm run clean
npm run build
was_it_ok $? "npm run build"

echo
echo "*** Building PDF..."
bin/pdf/make_pdf src/book.md
was_it_ok $? "make_pdf"

mv book.pdf dist/

echo
echo "*** Ready to upload - press [ENTER] to continue"
wait_for_input
tar zcf - dist | ssh $host tar zxfC - eth2book

echo
echo "*** Ready to install - press [ENTER] to continue"
wait_for_input
ssh $host eth2book/install_astro.sh $version
