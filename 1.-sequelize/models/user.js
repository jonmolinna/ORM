'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post }) {
      // define association here
      // agregando alias
      //this.hasMany(Post, { foreignKey: 'userId' })
      this.hasMany(Post, { foreignKey: 'userId', as: 'posts' })
    }

    // Que campos no devolver
    toJSON(){
      return { ...this.get(), id: undefined }
    }
  };
  User.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // Para Validar
      validate: {
        notNull: { msg: 'User must have a name' }, // No permita nulo
        notEmpty: { msg: 'Name must not be empty'} // No permitas cadenas vacias
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'User must have a email' },
        notEmpty: { msg: 'Email must not be empty'},
        isEmail: { msg: 'Must be a valid email address'} // comprueba el formato del correo electrónico
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'User must have a role' },
        notEmpty: { msg: 'Role must not be empty'}
      }
    },
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};