const router =  require('express').Router();
const withoutAuth = require('../../utils/withoutAuth.js');

router.get('/', withoutAuth, (req, res) => { 
    res.render("admin", {
    company_key: req.session.company_key,
}); });

module.exports = router;