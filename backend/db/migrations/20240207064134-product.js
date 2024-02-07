'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      product_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID
      },
      category_id: {
        type: Sequelize.DataTypes.UUID,
        allowNull:false
      },
      name: {
        type: Sequelize.STRING
      },
      image:{
        type : Sequelize.DataTypes.STRING,
        allowNull:true

      },
      description: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      buy_price: {
        type: Sequelize.STRING
      },
      sell_price: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('Products');
  }
};