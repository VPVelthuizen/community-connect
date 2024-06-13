const router =  require('express').Router();
const withAuth = require('../../utils/withAuth.js');
const { User, Company } = require('../../models')

router.get('/', withAuth, async (req, res) => { 
    try {
        const profileData = await User.findByPk(req.session.user_id, {
            include: Company,
        });

        const profile = profileData.get({ plain: true });

        res.render("profile", {
            username: profile.username,
            email: profile.email,
            phone: profile.phone,
            is_admin: profile.is_admin,
            company_id: profile.company_id,
            company_name: profile.company.name,
            company_city: profile.company.city,
            company_state: profile.company.state,
            company_cause: profile.company.cause,
            company_key: profile.company.company_key,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
    
});

module.exports = router;