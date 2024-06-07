const router = require('express').Router();

const htmlRoutes = require('./homepage.js');

router.use('/', htmlRoutes);

module.exports = router;