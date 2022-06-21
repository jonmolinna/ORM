const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class User extends Model { };

User.init(
    {
        // Atributos del Model
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'El campo no puede ser nulo'
                },
                isAlpha: {
                    args: true,
                    msg: 'El nombre solo puede contener letras'
                },
                len: {
                    args: [3, 255],
                    msg: 'El nombre tiene que ser entre 3 y 255 caracteres'
                }
            },
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'El campo tiene que ser un correo valido'
                }
            }
        },
        age: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: {
                    args: true,
                    msg: 'La edad tiene que ser un numero'
                },
                min: {
                    args: 18,
                    msg: 'La edad tiene que ser mayor o igual a 18'
                },
                max: {
                    args: 120,
                    msg: 'La edad tiene que ser real'
                },
                // validacion personalizada
                esPar(value) {
                    if (value % 2) {
                        throw new Error('La edad tiene que ser un numero par')
                    }
                }
            },
        },
        // { admin: 1, user: 0 }
        role: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    },
    {
        sequelize, // pasando la conexion
        modelName: 'user',
        timestamps: false,
    }
);

module.exports = User;