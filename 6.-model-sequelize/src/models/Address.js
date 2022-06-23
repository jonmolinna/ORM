'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // console.log('YOOOO>>>YOOO', models);
      Address.belongsTo(models.users, { as: 'residente', foreignKey: "user_id" })
    }
  }

  Address.init({
    street: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'addresses',
    tableName: 'addresses'
  });

  return Address;
};