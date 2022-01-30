// const { post } = require('./user-routes');
const router = require('express').Router();
const sequelize = require('../../config/connection');
const res = require('express/lib/response');
const bodyParser = require('body-parser');




router.use(bodyParser.json()); // for parsing application/json



module.exports = router;