#!/bin/bash
#
# Usage: build.sh [outputdirectory]

####################################################
# INIT                                             #
####################################################
BASEDIR=$(dirname "$1")
OUTPUTDIR="$1"

####################################################
# CLEAN                                            #
####################################################
echo "Cleaning previous build..."
rm "$OUTPUTDIR/html/console/" -r

####################################################
# SETUP                                            #
####################################################
echo "Setting up build structur..."
mkdir "$OUTPUTDIR/html/console/"
mkdir "$OUTPUTDIR/html/console/js"

####################################################
# JS                                               #
####################################################
echo "Building JAVASCRIPT..."
jsbuilder console.jsb "$OUTPUTDIR/html/console/js/"

####################################################
# HTML                                             #
####################################################
echo "Building HTML..."
for file in html/*; do
echo $file
    cp -rv $file "$OUTPUTDIR/html/"
done

####################################################
# CONTENT                                          #
####################################################
echo "Building CONTENT..."
for file in content/*; do
    cp -rv $file "$OUTPUTDIR/cgi-bin/Content/"
done



