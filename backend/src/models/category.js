'use strict';
const {
  Model,
  
} = require('sequelize');
const uuid = require('uuid')
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    category_id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: () => uuid.v4(),
    },
    name: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'Category', // Specify the correct table name here
    // Remove the timestamps option
  });
  return Category;
};
