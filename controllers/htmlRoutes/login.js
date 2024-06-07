const router =  require('express').Router();
const withoutAuth = require('../../utils/withoutAuth.js');

router.get('/login', withoutAuth, (req, res) => { res.render("login") });

module.exports = router;