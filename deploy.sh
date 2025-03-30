
#!/bin/bash

# Build the project
npm run build

# Navigate into the build output directory
cd dist

# Create a .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Initialize git in the dist folder
git init
git checkout -b main
git add .

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch of your repository
# Make sure to replace mohankopuru/slider-timeline-experience with your GitHub username and repository name
git push -f git@github.com:mohankopuru/slider-timeline-experience.git main:gh-pages

# Go back to the project root
cd ..

echo "Deployed to GitHub Pages!"
