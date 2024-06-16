const router = require('express').Router();

const homepage = require('./homepage.js');
const events = require('./events.js');
const forums = require('./forums.js');
const login = require('./login.js');
const register = require('./register.js');
const signup = require('./signup.js');
const admin = require('./admin.js')
const directory = require('./directory.js');
const company = require('./company.js');
const profile = require('./profile.js');
const edit = require('./edit.js')
const addPostRoutes = require('./addPost')
const postsRoutes = require('./posts.js')

router.use('/', homepage);
router.use('/login', login);
router.use('/register', register);
router.use('/signup', signup);
router.use('/profile', profile);
router.use('/directory', directory);
router.use('/admin', admin);
router.use('/events', events);
router.use('/edit', edit);
router.use('/forums', forums);
router.use('/company', company);
router.use('/addpost', addPostRoutes);
router.use('/posts', postsRoutes);

module.exports = router;