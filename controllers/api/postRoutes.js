const router = require('express').Router();
const { Post } = require('../../models');

// create a new post
router.post('/', async (req, res) => {
    try {
        const postData = {
            user_id: req.session.user_id,
            title: req.body.title,
            body: req.body.body,
            forum_id: req.body.forum_id,
        };
        const newPost = await Post.create(postData);

        res.json(newPost);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// update a post's name and body by its `id` value
router.put('/:id', async (req, res) => {
    try {
        const result = await Post.update(req.body,
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id
                }
            },
        );

        if (result[0] === 1) {
            res.json({ message: 'Post updated successfully' });
        } else {
            res.status(404).json({ message: 'Post not found or no changes made' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// delete a post by its `id` value
router.delete('/:id', async (req, res) => {
    try {
        const deletedRows = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (deletedRows === 1) {
            res.json({ message: 'Post deleted successfully' });
        } else {
            res.status(404).json({ message: 'Post not found or no changes made' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
module.exports = router;