// Imports the Sequelize library
const Sequelize = require('sequelize');
// Utilizes the 'dotenv' package in order to load the .env file and sets the environment variables to the process.env object.
require('dotenv').config();

let sequelize;
// Checks to see if the application is deployed. If DB_URL environment variable exists, then that is used. If not, it determines that you're on your local machine and utilizes the environment variables from the .env file to set up Sequelize. 
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.PGUSER,
    process.env.POSTGRES_PASSWORD,
    {
      host: process.env.PGHOST,
      dialect: 'postgres'
    }
  );
}

module.exports = sequelize;