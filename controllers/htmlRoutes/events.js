const router = require('express').Router();
const { Company, Event } = require('../../models')
const withAuth = require('../../utils/withAuth')

const { formatTime } = require('../../utils/formatTime');

router.get('/', async (req, res) => {
    try {
        const eventData = await Event.findAll({
            include: {
                model: Company,
            }
        });
        const events = eventData.map((event) => {
            const formattedEvent = event.get({ plain: true });
            // Format the time of each event
            formattedEvent.time = formatTime(formattedEvent.time);
            return formattedEvent;
        });

        res.render("events", {
            events,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/add', withAuth, async (req, res) => {
    res.render("add-event", {
        logged_in: req.session.logged_in,
    });
});

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
            company: event.company,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;