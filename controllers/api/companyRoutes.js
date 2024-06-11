const router = require('express').Router();
const { Company } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const companyData = await Company.create(req.body);
        if (!companyData) {
            res.status(400).json({message: 'company creation did not work!'})
            return
        } 
            req.session.company_key = companyData.company_key;
        return res.status(200).json(companyData)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;