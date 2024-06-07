const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Company extends Model {}

Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cause: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company_key: {
        type: DataTypes.STRING,
        allowNull: true
    },
  },
  {
    hooks: {
      beforeCreate(company) {
        // Generate a random 8-character password
        company.company_key = Math.random().toString(36).slice(-8);
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'company',
  }
);

module.exports = Company;