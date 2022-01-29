const router = require('express').Router();
const res = require('express/lib/response');
const sequelize = require('../config/connection');
const bodyParser = require('body-parser');


router.use(bodyParser.json()); // for parsing application/json

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/api/posts');
      return;
    }
  
    res.render('login');
  });
  
router.get('/privacy', (req, res) => {
    res.render('privacy')
});

router.get('/reviews', (req, res) => {
  res.render('reviews')
});

router.get('/post', (req, res) => {
  res.render('post');
});

router.post('/post', (req, res) => {
    console.log(req.body);
    const restaurantData = req.body;
    console.log(restaurantData);
    res.render('post', {
      restaurants: restaurantData})
    res.status(200);
 });




module.exports = router;