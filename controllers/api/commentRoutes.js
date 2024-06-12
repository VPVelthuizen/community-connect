const router = require('express').Router();
const { Comment } = require('../../models');

// create a new comment
router.post('/', async (req, res) => {
    try {
        const commentData = {
            user_id: req.session.user_id,
            body: req.body.body,
            post_id: req.body.post_id,
        };
        const newComment = await Comment.create(commentData);

        res.json(newComment);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// delete a comment by its `id` value
router.delete('/:id', async (req, res) => {
    try {
        const deletedRows = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (deletedRows === 1) {
            res.json({ message: 'Comment deleted successfully' });
        } else {
            res.status(404).json({ message: 'Comment not found or no changes made' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
module.exports = router;