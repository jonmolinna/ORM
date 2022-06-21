const Address = require('./models/Address');
const Post = require('./models/Post');
const User = require('./models/User');
const Band = require('./models/Band');

//------------------------------ Uno a Uno
// Usuario tiene una direccion
// Añade una clave foranea userId a la tabla adresses
User.hasOne(Address)

// Añade una clave userId a la tabla adresses
Address.belongsTo(User);

// Otra forma, usando arias
// User.hasOne(Address, { as: "domicilio", foreignKey: "residente_id"});
// Address.belongsTo(User, { as: "residente", foreignKey: "residente_id"})


//------------------------------ Uno a Muchos (1 a N)
// El usuario va a tener muchos posts
// se añade una clave userId a la tabla posts
User.hasMany(Post);

// Se añade una clave userId a la tabla posts
Post.belongsTo(User);

//
// User.hasMany(Post, { as: "publicaciones", foreignKey: "autorId" });
// Post.belongsTo(User, { as: "autor" });

//------------------------------ Muchos a Muchos
// esto crea una nueva tabla en la base de datos llamado user_band
User.belongsToMany(Band, { through: "user_band" });
// esto añade user.addBand, user.getBands, ...etc
Band.belongsToMany(User, { through: "user_band" });