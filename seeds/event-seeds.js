const { Event } = require('../models');

const eventData = [
  {
    name: 'Cats and Taps Adoption Day',
    company_id: '1',
    city: 'Westville',
    state: 'NJ',
    date: 'June 22, 2024',
    description: 'Adoption meet and greet at Westville Brewery',
  },
  {
    name: 'Christmas Gift Collection',
    company_id: '2',
    city: 'Deptford',
    state: 'NJ',
    date: 'December 19, 2024',
    description: 'Christmas gift collection for the less fortunate',
  },
  {
    name: 'Homeless Outreach',
    company_id: '3',
    city: 'Philadelphia',
    state: 'PA',
    date: 'July 15, 2024',
    description: 'Visiting homeless camps to deliver food and supplies',
  },
  {
    name: 'Phans Feeding Families Night at the Ballpark',
    company_id: '4',
    city: 'Philadelphia',
    state: 'PA',
    date: 'June 24, 2024',
    description: 'Teaming up with the Phillies to fight hunger',
  },
  {
    name: 'Meet and Greet Adoption Event',
    company_id: '5',
    city: 'Portland',
    state: 'OR',
    date: 'August 8, 2024',
    description: 'Meet and greet/adoption event',
  },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;