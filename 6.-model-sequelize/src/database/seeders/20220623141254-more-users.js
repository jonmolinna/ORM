'use strict';

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

    let users = [
      { name: "Mac", age: 20 },
      { name: "Mac", age: 20 },
      { name: "Mac", age: 20 },
      { name: "Mac", age: 20 },
      { name: "Mac", age: 20 },
    ];

    return queryInterface.bulkInsert('users', users, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('users', null, {});
  }
};
