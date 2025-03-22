
const ghpages = require('gh-pages');

// Replace <REPOSITORY> with your repository name
const repoURL = 'https://github.com/<USERNAME>/<REPOSITORY>.git';

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: repoURL,
  message: 'Auto-deploy to GitHub Pages',
  user: {
    name: 'Your Name',
    email: 'your.email@example.com'
  }
}, function(err) {
  if (err) {
    console.error('Deployment error:', err);
    return;
  }
  console.log('Successfully deployed to GitHub Pages!');
});
