#!/bin/bash

version=altair

# Set the host variable
source ../priv/server.sh

gatsby clean
gatsby build --prefix-paths

if [ $? -ne 0 ]
then
    echo "gatsby build failed"
    exit 1
fi

tar zcf - public | ssh $host tar zxfC - eth2book
ssh $host eth2book/install_$version.sh
