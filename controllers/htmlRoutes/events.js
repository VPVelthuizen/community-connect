const router =  require('express').Router();
const { User, Events } = require('../../models')

router.get('/', async (req, res) => { 
    try {
        const eventsData = await events.findAll({
            include: {
                model: User,
                attributes: { exclude: ['password'] },
            },
        })

        const events = eventsData.map((company) => {
            const formattedEvents = events.get({ plain: true });
            return formattedEvents
        });
        console.log(formattedEvents)

        // Need an events handlebars?
        res.render("events", {
            events,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
    
});

module.exports = router;