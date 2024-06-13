const { User } = require('../models');

const userData = [
  {
    username: '',
    phone: '',
    is_admin: '',
    company_id: '',
    email: '',
  },
  {
    username: '',
    phone: '',
    is_admin: '',
    company_id: '',
    email: '',
  },
  {
    username: '',
    phone: '',
    is_admin: '',
    company_id: '',
    email: '',
  },
  {
    username: '',
    phone: '',
    is_admin: '',
    company_id: '',
    email: '',
  },
  {
    username: '',
    phone: '',
    is_admin: '',
    company_id: '',
    email: '',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;