const router = require('express').Router();
const withAuth = require('../../utils/withAuth')
const { Forum } = require('../../models')


router.get('/:id', withAuth, async (req, res) => {
    try {
        const forum = await Forum.findByPk(req.params.id);

        res.render("add-post", {
            forum_id: forum.id,
            title: forum.title,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;