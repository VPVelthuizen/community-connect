const router = require('express').Router();
const { UserEvent } = require('../../models/');

router.post('/add', async (req, res) => {
    try {
      const { event_id } = req.body;
      const user_id = req.session.user_id;
  
      const newUserEvent = await UserEvent.create({ user_id, event_id });
  
      res.status(201).json(newUserEvent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding user to event' });
    }
  });

  module.exports = router;