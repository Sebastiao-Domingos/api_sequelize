'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Administradores" , {
      id : {
        allowNull : false,
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
      },
      name : {
        type : Sequelize.STRING,
        allowNull : false
      },
      email : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
      },
      password : {
        type : Sequelize.STRING,
        allowNull : false,
      }

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Administradores")
  }
};
