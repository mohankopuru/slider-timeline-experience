
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# create .nojekyll file to bypass Jekyll processing
touch .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# deploy to the main branch of your GitHub Pages repository
git push -f git@github.com:mohankopuru/mohankopuru.github.io.git main

cd -
