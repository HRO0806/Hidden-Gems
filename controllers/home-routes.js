const router = require('express').Router();
const res = require('express/lib/response');
const sequelize = require('../config/connection');
const bodyParser = require('body-parser');




router.use(bodyParser.json()); // for parsing application/json

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/post', (req, res) => {
    res.render('post')
});

router.get('/privacy', (req, res) => {
    res.render('privacy')
});

router.post('/saveLocation', (req, res) => {
    const restaurantData = req.body;
    console.log(restaurantData);

    res.render('post', restaurantData)
    res.status(200);
 });




module.exports = router;