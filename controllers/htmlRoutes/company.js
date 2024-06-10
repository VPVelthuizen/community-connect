const router =  require('express').Router();
const withAuth = require('../../utils/withAuth.js');
const { User, Company } = require('../../models')

router.get('/', withAuth, async (req, res) => { 
    try {
        // Not sure about this line I think I'm missing something or have too muc
        const companyData = await User.findByPk(req.session.user_id, {
            include: Company,
        });

        const company = companyData.get({ plain: true });
        // Took the format in the profile page and tried to keep it consistent with the profile
        // Need company handlebars?
        res.render("company", {
            name: company.name,
            email: company.email,
            cause: company.cause,
            city: company.city,
            state: company.state,
            company_key: company.company.company_key,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
    
});

module.exports = router;