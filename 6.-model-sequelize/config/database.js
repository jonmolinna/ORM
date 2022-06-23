require('dotenv').config();

module.exports = {
  // Conexion
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "molina125",
  database: process.env.DB_DATABASE || "sequelize_2",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",

  // Configurar Seeds
  // para almacenar los seeds
  // seederStorage: "json",
  // seederStoragePath: "sequelizeSeeds.json",
  seederStorage: "sequelize",
  seederStorageTableName: "sequelizeseeds",

  // configurar migraciones
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",

  define: {
    timestamps: false,
    // Genera claves foraneas de este tipo user_id en vez de userIdS
    underscored: true,
  },
};
