const router = require('express').Router();
const { User, Company, Event } = require('../../models')

router.get('/:id', async (req, res) => {
    try {
        const companyData = await Company.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['username', 'is_admin', 'email']
            },
            {
                model: Event,
                attributes: ['name', 'city', 'state']
            }]
        });

        const company = companyData.get({ plain: true });
        console.log(company)
        res.render("company", {
            name: company.name,
            cause: company.cause,
            city: company.city,
            state: company.state,
            users: company.users,
            events: company.events,
            description: company.description,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;