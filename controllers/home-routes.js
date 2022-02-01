const router = require('express').Router();
const res = require('express/lib/response');
const sequelize = require('../config/connection');
const bodyParser = require('body-parser');


router.use(bodyParser.json()); // for parsing application/json

router.get('/', (req, res) => {  
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect('post');

    // } else {
      res.render('login')
    // }
  
    
  });
  
router.get('/privacy', (req, res) => {
  res.render('privacy', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/reviews', (req, res) => {
  res.render('reviews', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/post', (req, res) => {
  res.render('post', {
    loggedIn: req.session.loggedIn
  });
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