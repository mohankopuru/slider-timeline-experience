
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# create .nojekyll file to bypass Jekyll processing
touch .nojekyll

# initialize git repository if not already initialized
if [ -d .git ]; then
  echo "Git repository already initialized"
else
  git init
fi

git add -A
git commit -m "Deploy to GitHub Pages"

# deploy to the main branch of your GitHub Pages repository
git push -f git@github.com:mohankopuru/mohankopuru.github.io.git main

cd -

echo "Deployment complete!"
