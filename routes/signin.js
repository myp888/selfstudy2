const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Sign In';
  const header = 'Sign In';
  const footer = 'Thanks for visiting my website!';
  res.render('signin', { title, header, footer });
  console.log("/ signin access trigerred.");
});

router.post('/', (req, res) => {
  // Handle form submission for signing in
  res.send('Signed in successfully!');
});

module.exports = router;