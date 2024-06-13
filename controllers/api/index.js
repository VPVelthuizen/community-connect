const router = require('express').Router();

const userRoutes = require('./userRoutes')
const postRoutes = require('./postRoutes')
const forumRoutes = require('./forumRoutes')
const eventRoutes = require('./eventRoutes')
const companyRoutes = require('./companyRoutes')
const commentRoutes = require('./commentRoutes')
const userEventRoutes = require('./userEventRoutes')

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/forums', forumRoutes);
router.use('/events', eventRoutes);
router.use('/companies', companyRoutes);
router.use('/comments', commentRoutes);
router.use('/userEvents', userEventRoutes)

module.exports = router;