const { User } = require('../models');

const userData = [
  {
    username: 'stephdilolle',
    phone: '6094172640',
    is_admin: 'true',
    company_id: '1',
    email: 'stephdilolle@gmail.com',
    password: 'password',
  },
  {
    username: 'noahmanno',
    phone: '1234567890',
    is_admin: 'true',
    company_id: '2',
    email: 'noahmanno@gmail.com',
    password: 'password',
  },
  {
    username: 'donnacancode',
    phone: '2345671234',
    is_admin: 'true',
    company_id: '3',
    email: 'donnaburns@gmail.com',
    password: 'password',
  },
  {
    username: 'vincev',
    phone: '3452346789',
    is_admin: 'true',
    company_id: '4',
    email: 'vince@gmail.com',
    password: 'password',
  },
  {
    username: 'leeasher',
    phone: '7896542345',
    is_admin: 'yes',
    company_id: '5',
    email: 'leeasher@gmail.com',
    password: 'password',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;