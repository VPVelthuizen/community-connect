const router = require('express').Router();
const tempName = require('../../models/index.js')

// ? route to get homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
    logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;