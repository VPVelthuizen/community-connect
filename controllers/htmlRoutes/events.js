const router = require('express').Router();
const { Company, Event } = require('../../models')

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

        res.render("event", {
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

router.get('/', async (req, res) => {
    try {
        const eventData = await Event.findAll(req.params.id, {
            include: {
                model: Company,
                attributes: { include: ['name'] },
            }
        });
        const event = eventData.get({ plain: true });
        console.log(event);

        res.render("event", {
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

module.exports = router;