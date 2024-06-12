const { Event } = require('../models');

const eventData = [
  {
    name: '',
    company_id: '',
    city: '',
    state: '',
    date: '',
    description: '',
  },
  {
    name: '',
    company_id: '',
    city: '',
    state: '',
    date: '',
    description: '',
  },
  {
    name: '',
    company_id: '',
    city: '',
    state: '',
    date: '',
    description: '',
  },
  {
    name: '',
    company_id: '',
    city: '',
    state: '',
    date: '',
    description: '',
  },
  {
    name: '',
    company_id: '',
    city: '',
    state: '',
    date: '',
    description: '',
  },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;