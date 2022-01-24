const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    console.log("test");
    res.render('homepage');
});

module.exports = router;