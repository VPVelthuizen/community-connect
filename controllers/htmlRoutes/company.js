const router = require('express').Router();
const { User, Company, Event } = require('../../models')
const { format_date } = require('../../utils/dateUtils') 
const { formatTime } = require('../../utils/formatTime')

router.get('/:id', async (req, res) => {
    try {
        const companyData = await Company.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['company_id', 'username', 'is_admin', 'email']
            },
            {
                model: Event,
                attributes: ['name', 'city', 'state', 'time', 'date']
            }]
        });

        const company = companyData.get({ plain: true });

        // Check if the current user has the company ID in their model
        const hasCompany = req.session.company_id && company.users.some(user => user.company_id === req.session.company_id);

        // Format the event date and time
        const formattedEvents = company.events.map(event => {
            return {
                ...event,
                date: format_date(event.date),
                time: formatTime(event.time)
            };
        });

        res.render("company", {
            id: company.id,
            name: company.name,
            cause: company.cause,
            city: company.city,
            state: company.state,
            users: company.users,
            events: formattedEvents,
            company_key: company.company_key,
            description: company.description,
            logged_in: req.session.logged_in,
            hasCompany: hasCompany,
            is_admin: req.session.is_admin,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;