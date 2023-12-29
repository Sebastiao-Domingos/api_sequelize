'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Estudantes" , {
      id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true ,
        primaryKey : true
      },
      name : {
        type : Sequelize.STRING,
        allowNull: false
      },
      morada : {
        type : Sequelize.STRING,
      }
    })
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Estudandes")
  }
};
