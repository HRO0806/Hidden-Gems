const router = require('express').Router();

router.get('/', (req, res) => {
    console.log("test");
    res.render('homepage');
});

module.exports = router;