const router = require('express').Router();
const { post } = require('./user-routes');
const sequelize = require('sequelize');
const getRestaurants = require('../../public/javascript/geocoder');

router.post('/', (req, res) => {
   console.log(getRestaurants(req));
});

module.exports = router;