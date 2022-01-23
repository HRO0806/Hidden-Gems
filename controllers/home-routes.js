const router = require('express').Router();
const sequelize = require('sequelize');

router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;