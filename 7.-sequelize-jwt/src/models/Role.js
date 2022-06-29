'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // Esto es para que en el API se muestre los roles y user
    static associate(models) {
      // define association here
      // through => name del tabla
      role.belongsToMany(models.user, { as: "users", through: "user_role", foreignKey: "role_id" })
    }
  }
  role.init({
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'role',
  });
  return role;
};