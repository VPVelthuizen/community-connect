const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.company_id = userData.company_id;
            req.session.is_admin = userData.is_admin;
            req.session.logged_in = true;

            console.log(req.session)

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err)
    }
});

// login route
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });

        if (!userData) {
            res.status(400).json({ message: 'Incorrect username or password, try again' });
            return
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect username or password, try again' });
            return
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.company_id = userData.company_id;
            req.session.is_admin = userData.is_admin;
            req.session.logged_in = true;

            console.log(req.session)

            res.json({ user: userData, message: 'Log in successful!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// logout route
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.put('/', async (req, res) => {
    try {
        // Prepare the data to be updated based on the request body
        const dataToUpdate = {};
        if (req.body.email) {
            dataToUpdate.email = req.body.email;
        }
        if (req.body.password) {
            dataToUpdate.password = req.body.password;
        }
        if (req.body.phone) {
            dataToUpdate.phone = req.body.phone;
        }

        console.log(req.body)

        // Update the user data in the database based on the user_id in the session
        await User.update(dataToUpdate, {
            where: {
                id: req.session.user_id,
            },
        });

        return res.status(200).json({ message: 'update complete!' });
    } catch (err) {
        return res.status(400).json(err);
    }
});


module.exports = router;