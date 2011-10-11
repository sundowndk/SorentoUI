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
rm "$OUTPUTDIR/html/sorentoui/" -r
#rm "$OUTPUTDIR/cgi-bin/Content/sorentoui/" -r

####################################################
# SETUP                                            #
####################################################
echo "Setting up build structur..."
mkdir "$OUTPUTDIR/html/sorentoui/"
mkdir "$OUTPUTDIR/html/sorentoui/js"

####################################################
# JS                                               #
####################################################
echo "Building JAVASCRIPT..."
jsbuilder sorentoui.jsb "$OUTPUTDIR/html/sorentoui/js/"

####################################################
# HTML                                             #
####################################################
#echo "Building HTML..."
#for file in html/*; do
#echo $file
#    cp -rv $file "$OUTPUTDIR/html/"
#done

####################################################
# CONTENT                                          #
####################################################
#echo "Building CONTENT..."
#for file in content/*; do
#    cp -rv $file "$OUTPUTDIR/cgi-bin/Content/"
#done



