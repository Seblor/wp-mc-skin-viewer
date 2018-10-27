mkdir -p dist/temp
cp -r src/* dist/temp/
mkdir dist/temp/resources
cp -r resources/* dist/temp/resources/
cd dist/temp
7z a -r -tzip ../wp-skin-viewer.zip *
cd ../..
rm -r dist/temp