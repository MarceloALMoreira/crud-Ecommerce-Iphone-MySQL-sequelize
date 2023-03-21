'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [{
      name: 'Fulano',
      ativo: true,
      email: 'estudante@hotmail.com',
      role: 'estudante',
      creteadAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Marcelo',
      ativo: false,
      email: 'marcelo@hotmail.com',
      role: 'estudante',
      creteadAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});

  }
};
