const router =  require('express').Router();
const withoutAuth = require('../../utils/withoutAuth.js');

router.get('/', withoutAuth, (req, res) => { res.render("signup") });

module.exports = router;