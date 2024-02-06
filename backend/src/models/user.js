"use strict";

const uuid = require('uuid');
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "User",
        {
          user_id: {
               primaryKey: true,
               type: DataTypes.UUID,
                defaultValue: () => uuid.v4(),
             },
             name: {
               type: DataTypes.STRING
             },
             email: {
               type: DataTypes.STRING
             },
             password: {
               type: DataTypes.STRING
             },
             role: {
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
        },
    );

    
    model.associate = function(models) {
        // Define associations if any
       
    };
    return model;
    
};