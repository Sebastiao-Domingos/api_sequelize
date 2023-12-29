'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Estudantes', 'foto', {
          type: Sequelize.BLOB,
        }, { transaction: t }),
        queryInterface.addColumn('Estudantes', 'estado', {
          type: Sequelize.ENUM("Activado", "Desactivado"),
          defaultValue : "Activado"
        }, { transaction: t })
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Estudantes', 'foto', { transaction: t }),
        queryInterface.removeColumn('Estudantes', 'estado', { transaction: t })
      ]);
    });
  }
};
