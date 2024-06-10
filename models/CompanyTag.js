const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class CompanyTag extends Model {}

CompanyTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'company',
        key: 'id',
      }
    },
      tag_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tag',
          key: 'id',
        }
      }
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'company_tag',
  }
);

module.exports = CompanyTag;
