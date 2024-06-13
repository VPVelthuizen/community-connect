const { Company } = require('../models');

const companyData = [
  {
    name: 'Community Cat Club',
    cause: 'Cat rescue and TNR',
    city: 'Bellmawr',
    state: 'NJ',
  },
  {
    name: 'The Unforgotten Haven',
    cause: 'Help the less fortunate',
    city: 'Blackwood',
    state: 'NJ',
  },
  {
    name: 'Helping Hands Outreach Program',
    cause: 'Homelessness, addiction, and mental health issues',
    city: 'Philadelphia',
    state: 'PA',
  },
  {
    name: 'Philabundance',
    cause: 'Food bank',
    city: 'Philadelphia',
    state: 'PA',
  },
  {
    name: 'The Asher House',
    cause: 'Animal sanctuary',
    city: 'Portland',
    state: 'OR',
  },
];

const seedCompanies = () => Company.bulkCreate(companyData);

module.exports = seedCompanies;