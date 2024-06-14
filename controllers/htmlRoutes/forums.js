const router = require('express').Router();
const { Forum, User, Post } = require('../../models')
const withAuth = require('../../utils/withAuth')
const withAdmin = require('../../utils/withAdmin')

router.get('/', async (req, res) => {
    try {
        const forumData = await Forum.findAll({
            include: [
                {
                    model: Post,
                },
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const forums = forumData.map((forum) => {
            // Format the forum object to include post count and the associated user
            const formattedForum = {
                id: forum.id,
                title: forum.title,
                // Counting posts associated with the forum
                postCount: forum.posts.length,
                // Getting the username of the user who owns the forum
                createdBy: forum.user.username,
            };
            return formattedForum;
        });

        res.render('forums', {
            forums,
            is_admin: req.session.is_admin,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/add', withAuth, withAdmin, async (req, res) => {
    res.render("add-forum", {
        logged_in: req.session.logged_in,
    });
});

router.get('/addpost', withAuth, async (req, res) => {
    res.render("add-post", {
        logged_in: req.session.logged_in,
    });
});

router.get('/:id', async (req, res) => {
    try {
        const forumData = await Forum.findByPk(req.params.id);
        const forum = forumData.map((forum) => {
            const formattedForum = forum.get({ plain: true });
            return formattedForum
        });
        console.log(forum)

        res.render("forum", {
            forum,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;