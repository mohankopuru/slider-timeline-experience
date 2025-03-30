
import ghpages from 'gh-pages';

// Replace with your repository name
const repoURL = 'https://github.com/mohankopuru/slider-timeline-experience.git';

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: repoURL,
  message: 'Auto-deploy to GitHub Pages',
  user: {
    name: 'Mohan Kopuru',
    email: 'mohank.edu@gmail.com'
  }
}, function(err) {
  if (err) {
    console.error('Deployment error:', err);
    return;
  }
  console.log('Successfully deployed to GitHub Pages!');
});
