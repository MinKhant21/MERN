"use strict";

const uuid = require("uuid");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define("Product", {
    product_id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: () => uuid.v4(),
    },
    category_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.STRING,
    },
    buy_price: {
      type: DataTypes.STRING,
    },
    sell_price: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });

  model.associate = function (models) {
    // Define associations if any
  };
  return model;
};
