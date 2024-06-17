const router = require('express').Router();
const { Post, Comment, User } = require('../../models')
const format_date = require('../../utils/dateUtils');


router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
            ],
        });

        const formattedComments = post.comments.map(comment => ({
            id: comment.id,
            body: comment.body,
            date_created: format_date(comment.date_created),
            createdBy: comment.user.username,
        }));

        res.render("post", {
            id: post.id,
            title: post.title,
            body: post.body,
            comments: formattedComments,
            logged_in: req.session.logged_in,
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;