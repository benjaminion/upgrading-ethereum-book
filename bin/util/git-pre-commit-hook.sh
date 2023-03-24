#!/bin/sh

# Run the pre-build checks on the book source
node -e 'require("./bin/build/prebuild").runChecks()'

if [ "$?" != "0" ]
then
    echo -e "\nError: Not committing due to failed checks.\n" >&2
    exit 1
fi
