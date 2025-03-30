
import ghpages from 'gh-pages';

// Repository for the user page
const repoURL = 'https://github.com/mohankopuru/mohankopuru.github.io.git';

ghpages.publish('dist', {
  branch: 'main', // GitHub Pages user sites must be published from the main branch
  repo: repoURL,
  message: 'Auto-deploy to GitHub Pages',
  user: {
    name: 'Mohan Kopuru',
    email: 'mohank.edu@gmail.com'
  },
  dotfiles: true // Include .nojekyll and other dotfiles
}, function(err) {
  if (err) {
    console.error('Deployment error:', err);
    return;
  }
  console.log('Successfully deployed to GitHub Pages!');
});
