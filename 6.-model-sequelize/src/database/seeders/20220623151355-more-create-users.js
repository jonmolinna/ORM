'use strict';

const { sequelize } = require('../../models/index');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // Sale error
    let user = await sequelize.models.users.create({
      name: "Dallas",
      age: 32,
      domicilio: {
        street: "Av. Las almendras 300"
      }
    }, {
      include: "domicilio"
    })

    return queryInterface.bulkInsert('users', user, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // elimina usuarios de 32 años
    return queryInterface.bulkDelete('users', { age: 32 }, {});
  }
};
