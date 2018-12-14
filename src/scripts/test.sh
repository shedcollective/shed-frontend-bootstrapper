#!/bin/bash

# create npm link
echo '';
echo "Creating NPM Link"
echo '';
TEST_DIR=$(pwd);
cd $TEST_DIR;
npm link;

echo '';
echo "Removing old test directory"
echo '';
rmdir $TEST_DIR/test;

if ! [ -f $TEST_DIR/test ]; then
    mkdir $TEST_DIR/test;
fi

cd $TEST_DIR/test;

echo '';
echo "Installing bootstapper package"
echo '';

npm init -y;
npm link shed-frontend-bootstrapper;
exec $TEST_DIR/test/node_modules/shed-frontend-bootstrapper/src/postinstall.sh
