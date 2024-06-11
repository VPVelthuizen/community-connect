const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'id',
      }
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'event',
  }
);

module.exports = Event;