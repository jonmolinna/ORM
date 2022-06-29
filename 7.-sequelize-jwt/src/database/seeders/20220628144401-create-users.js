'use strict';

const bcrypt = require('bcrypt');
const authConfig = require('../../../config/auth');

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

    await queryInterface.bulkInsert('users', [
      {
        name: "melek",
        email: "melek123@gmail.com",
        password: bcrypt.hashSync("1234567890", +authConfig.rounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "meryem",
        email: "meryem@gmail.com",
        password: bcrypt.hashSync("1234567890", +authConfig.rounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "jane",
        email: "jane123@gmail.com",
        password: bcrypt.hashSync("1234567890", +authConfig.rounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "angela",
        email: "angela123@gmail.com",
        password: bcrypt.hashSync("1234567890", +authConfig.rounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "kendra",
        email: "kendra123@gmail.com",
        password: bcrypt.hashSync("1234567890", +authConfig.rounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "dallas",
        email: "dallas123@gmail.com",
        password: bcrypt.hashSync("1234567890", +authConfig.rounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('users', null, {});
  }
};
