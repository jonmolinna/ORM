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
    let addresses = [];

    // let users = await User.findAll();
    let users = await sequelize.models.users.findAll();

    users.forEach(user => {
      addresses.push({
        street: 'Av. las palmeras 400',
        user_id: user.id
      });
    });

    return queryInterface.bulkInsert('addresses', addresses, {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('addresses', null, {});
  }
};
