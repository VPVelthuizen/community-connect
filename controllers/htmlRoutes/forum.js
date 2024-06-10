const router =  require('express').Router();
const { User, Forum } = require('../../models')

router.get('/', async (req, res) => { 
    try {
        const forumData = await Forum.findAll({
            include: {
                model: User,
                attributes: { exclude: ['password'] },
            },
        })

        const forum = forumData.map((forum) => {
            const formattedForum = forum.get({ plain: true });
            return formattedForum
        });
        console.log(forum)

        // Need to get a forum handlebars?
        res.render("forum", {
            forum,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
    
});

module.exports = router;