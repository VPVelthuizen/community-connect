const router = require('express').Router();
const { Company, Event, User } = require('../../models')
const withAuth = require('../../utils/withAuth')

const { formatTime } = require('../../utils/formatTime');
const { format_date } = require('../../utils/dateUtils')

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
            // Format the date of each event
            formattedEvent.date = format_date(formattedEvent.date);
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
            include: [
                {
                    model: Company,
                    include: User // Assuming User is the model for users associated with the company
                },
                {
                    model: User,
                    through: { attributes: [] }
                }
            ]
        });

        const event = eventData.get({ plain: true });
        console.log(event)

        // Format time and end_time
        const formattedTime = formatTime(event.time); // Function to format time
        const formattedEndTime = formatTime(event.end_time); // Function to format end_time

        res.render("event", {
            id: event.id,
            name: event.name,
            city: event.city,
            state: event.state,
            description: event.description,
            company: event.company,
            company_users: event.company.users, 
            attending_users: event.users,
            time: formattedTime,
            end_time: formattedEndTime,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;