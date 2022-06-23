'use strict';

module.exports = {
  // Se ejecuta cuando hacemos el seed (siembra)
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

    let users = [
      { name: "Melek", age: 20 },
      { name: "Meryem", age: 21 },
      { name: "Jane", age: 22 },
      { name: "Angela", age: 23 },
    ];

    return queryInterface.bulkInsert('users', users, {});
  },

  // Esto se ejecuta cuando se dehace la siembra
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
