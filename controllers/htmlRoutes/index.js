const router = require('express').Router();

const homepage = require('./homepage.js');
// const events = require('./events.js');
// const forum = require('./forum.js');
const login = require('./login.js');
const register = require('./register.js');
const signup = require('./signup.js');
// const directory = require('./directory.js');
// const company = require('./company.js');
const profile = require('./profile.js');

router.use('/', homepage);
router.use('/login', login);
router.use('/register', register);
router.use('/signup', signup);
router.use('/profile', profile)

module.exports = router;