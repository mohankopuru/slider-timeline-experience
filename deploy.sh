
#!/bin/bash

# Set error handling
set -e

echo "Starting deployment process..."

# Build the project
echo "Building the project..."
npm run build

# Create a .nojekyll file to bypass Jekyll processing
echo "Creating .nojekyll file..."
touch dist/.nojekyll

# Deploy using gh-pages
echo "Deploying to GitHub Pages..."
node deploy-script.js

echo "Deployment completed!"
