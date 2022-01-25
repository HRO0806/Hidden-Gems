const router = require('express').Router();
const { post } = require('./user-routes');
const sequelize = require('sequelize');
const getRestaurants = require('../../public/javascript/geocoder');

router.post('/', (req, res) => {
   const userCoords = req.body;
   console.log(getRestaurants(userCoords));
});

module.exports = router;