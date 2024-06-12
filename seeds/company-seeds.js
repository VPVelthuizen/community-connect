const { Company } = require('../models');

const companyData = [
  {
    name: '',
    cause: '',
    city: '',
    state: '',
  },
  {
    name: '',
    cause: '',
    city: '',
    state: '',
  },
  {
    name: '',
    cause: '',
    city: '',
    state: '',
  },
  {
    name: '',
    cause: '',
    city: '',
    state: '',
  },
  {
    name: '',
    cause: '',
    city: '',
    state: '',
  },
];

const seedCompanies = () => Company.bulkCreate(companyData);

module.exports = seedCompanies;