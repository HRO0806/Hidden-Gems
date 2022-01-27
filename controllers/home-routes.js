const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/post');
      return;
    }
  
    res.render('login');
  });
  

router.get('/post', (req, res) => {
    res.render('post')
});

module.exports = router;