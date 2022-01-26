const router = require('express').Router();
const sequelize = require('../config/connection');

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
})

module.exports = router;