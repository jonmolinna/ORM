require('dotenv').config();

module.exports = {
  // configuracion de base de datos
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "molina125",
  database: process.env.BD_DATABASE || "sequelize_jwt",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",

  // Configuration Seeds
  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  // Configuration Migrations
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",
}
