const router =  require('express').Router();
const { User, Company } = require('../../models')

router.get('/', async (req, res) => { 
    try {
        const companyData = await Company.findAll({
            include: {
                model: User,
                attributes: { exclude: ['password'] },
            },
        })

        const companies = companyData.map((company) => {
            const formattedCompany = company.get({ plain: true });
            return formattedCompany
        });
        console.log(companies)

        res.render("directory", {
            companies,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
    
});

module.exports = router;