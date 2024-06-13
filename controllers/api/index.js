const router = require('express').Router();

const userRoutes = require('./userRoutes')
const tagRoutes = require('./tagRoutes')
const postRoutes = require('./postRoutes')
const forumRoutes = require('./forumRoutes')
const eventRoutes = require('./eventRoutes')
const companyRoutes = require('./companyRoutes')
const commentRoutes = require('./commentRoutes')

router.use('/users', userRoutes);
router.use('/tags', tagRoutes);
router.use('/posts', postRoutes);
router.use('/forums', forumRoutes);
router.use('/events', eventRoutes);
router.use('/companies', companyRoutes);
router.use('/comments', commentRoutes);

module.exports = router;