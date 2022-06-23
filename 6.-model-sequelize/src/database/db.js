const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/database');

const db = {};

db.connection = new Sequelize(config.database, config.username, config.password, config);

// Vinculamos los modelos DB
db.User = require('../models/User')(db.connection, DataTypes);
db.Address = require('../models/Address')(db.connection, DataTypes);

// Asociar los modelos
db.User.associate(db);
db.Address.associate(db);

module.exports = db;

// ELIMINAR ESTE ARCHIVO YA QUE NO SE USA