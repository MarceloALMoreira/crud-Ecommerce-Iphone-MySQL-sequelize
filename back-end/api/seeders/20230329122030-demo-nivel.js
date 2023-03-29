'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Niveis', [
      {
        descricao: 'Básico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Intermediário',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Avançado',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Niveis', null, {});
  }
};
