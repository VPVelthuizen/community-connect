const router = require('express').Router();
const { Company, Event } = require('../../models')

router.get('/', (req, res) => { res.render("events") });

router.get('/:id', async (req, res) => {
    try {
        const eventData = await Event.findByPk(req.params.id, {
            include: {
                model: Company,
                attributes: { include: ['name'] },
            }
        });
            const event = eventData.get({ plain: true });
        console.log(event);

        res.render("events", {
            name: event.name,
            city: event.city,
            state: event.state,
            description: event.description,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }

});

// Need to do a router get / and use find all still include company

module.exports = router;