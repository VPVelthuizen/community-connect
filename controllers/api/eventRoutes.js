const router = require('express').Router();
const { Event, Company } = require('../../models');

  // create a new event
  router.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.json(newEvent);
    } catch (err) {
        res.json(err);
    }
});

  // update an event's name by its `id` value
  router.put('/:id', async (req, res) => {
    try {
        const result = await Event.update(
            { name: req.body.name },
            { where: { id: req.params.id } }
        );

        if (result[0] === 1) {
            res.json({ message: 'Event updated successfully' });
        } else {
            res.status(404).json({ message: 'Event not found or no changes made' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

  // delete an event by its `id` value
  router.delete('/:id', async (req, res) => {
    try {
        const deletedRows = await Event.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (deletedRows === 1) {
            res.json({ message: 'Event deleted successfully' });
        } else {
            res.status(404).json({ message: 'Event not found or no changes made' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
