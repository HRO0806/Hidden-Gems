const router = require('express').Router();

const postRoutes = require('./post-routes');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/posts', postRoutes);

module.exports = router;