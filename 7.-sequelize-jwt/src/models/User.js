'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // Esto es para que en el API se muestre los posts y roles
    static associate(models) {
      // define association here
      console.log(models)
      user.hasMany(models.post, { as: "posts", foreignKey: "userId", })
      user.belongsToMany(models.role, { as: "roles", through: "user_role", foreignKey: "user_id" })
    }
  }
  user.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "El nombre solo puede contener letras"
        },
        len: {
          args: [2, 100],
          msg: "El nombre debe tener entre 10 a 100 caracteres"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 100],
          msg: 'La contraseña debe tener entre 6 a 100 caracteres'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Ingrese un email valido"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });

  // Creando una funcion para verificar los roles
  user.isAdmin = function (roles) {
    // return roles.find( role => role.role === "admin" )
    let tmpArray = [];
    roles.forEach(role => tmpArray.push(role.role));
    return tmpArray.includes('admin');
  }

  return user;
};