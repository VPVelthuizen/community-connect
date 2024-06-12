const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

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
            req.session.logged_in = true;

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
        const userData = await User.findByPk(req.session.user_id);

        if (!userData) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        // Check if new email is provided in the request
        if (req.body.email) {
            userData.email = req.body.email;
        }

        // Check if new password is provided in the request
        if (req.body.newPassword) {
            userData.password = req.body.newPassword;
        }

        // Check if new cellphone number is provided in the request
        if (req.body.phone) {
            userData.phone = req.body.phone;
        }


        console.log(userData)

        // Save the updated user data
        await userData.save();

        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;