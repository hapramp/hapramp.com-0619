#/bin/sh

CURRENT_BRANCH=`git branch | grep \* | cut -d ' ' -f2`
echo "Current branch $CURRENT_BRANCH"

echo "Deleting existing build branch if any"
git branch -D build

echo "Checking out master"
git checkout master

COMMIT_HASH=`git rev-parse HEAD`
echo "Commit hash is $COMMIT_HASH"

echo "Checking out new branch build"
git checkout -b build

echo "Building bundle"
yarn build

echo "Removing extra files"
shopt -s extglob
rm -- !("build"|"package.json")

echo "Adding files to git"
git add .
git add -f build package.json
git commit -m "Build for $COMMIT_HASH"

echo "Pushing changes"
git push origin build -f

echo "Reverting back to previous branch"
git checkout $CURRENT_BRANCH
