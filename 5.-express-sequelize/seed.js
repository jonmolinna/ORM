const sequelize = require('./database/db');
const Post = require('./database/models/Post');
const User = require('./database/models/User');
const Address = require('./database/models/Address');
const Band = require('./database/models/Band');
require('./database/asociations');

// Users
const users = [
    { name: "Melenk", email: "melenk123@gmail.com", age: 20, role: 0 },
    { name: "Miryem", email: "miryem123@gmail.com", age: 24, role: 1 },
    { name: "Dannan", email: "dannan123@gmail.com", age: 18, role: 0 },
    { name: "Angela", email: "angela123@gmail.com", age: 26, role: 0 },
    { name: "jane", email: "jane123@gmail.com", age: 10, role: 0 },
];

// Addresses
const addresses = [
    { street: "Av. las palmeras 305", userId: 1 },
    { street: "Av. Las Almendras 300", userId: 2 },
    { street: "Av. Universitaria 10000", userId: 3 },
    { street: "Av. El ejercito 300", userId: 4 },
    { street: "Av. Angamos 500", userId: 5 },
];

// Posts
const posts = [
    { title: "Mundo Azul", body: "Es ancho y ajeno", userId: 1 },
    { title: "Gato negro", body: "Los gatos duerme mas tiempo", userId: 1 },
    { title: "title 3", body: "body 3", userId: 1 },
    { title: "title 11", body: "body 11", userId: 2 },
    { title: "title 4", body: "body 4", userId: 2 },
    { title: "title 5", body: "body 5", userId: 3 },
    { title: "title 6", body: "body 6", userId: 3 },
    { title: "title 7", body: "body 7", userId: 3 },
    { title: "title 8", body: "body 8", userId: 4 },
    { title: "title 9", body: "body 9", userId: 5 },
    { title: "title 10", body: "body 10", userId: 5 },
];

sequelize.sync({ force: false }).then(() => {
    // conexion establecida
    console.log("La conexion establecida");
}).then(() => {
    // Rellenar usuarios
    users.forEach(user => User.create(user));
}).then(() => {
    // Rellenar direcciones
    addresses.forEach(address => Address.create(address));
}).then(() => {
    // Rellenar post
    posts.forEach(post => Post.create(post))
}).then(async () => {
    // Primera forma
    await Band.create({
        name: "Los abrazafarolas",
        type: "Rock",
        users: [
            { name: "Lucia", age: 18, email: "lucia@gmail.com" },
            { name: "Alberto", age: 22, email: "alberto@gmail.com" },
        ]
    }, {
        include: "users"
    });

    // Segunda forma
    let user1 = await User.create({ name: "Sergio", age: 38, email: "sergio@gmail.com" });
    let user2 = await User.create({ name: "Monica", age: 44, email: "monica@gmail.com" });

    let band2 = await Band.create({
        name: "Los Picateclas",
        type: "Death Metal"
    });

    band2.addUsers([user1, user2]);

    // tercera forma
    let user3 = await User.create({ name: "malina", age: 22, email: "tanase@gmail.com" });

    let band3 = await Band.create({
        name: "dj Lala",
        type: "Electro"
    });

    band3.addUser(user3);

    // Agregando usuario a una Banda
    let user4 = await User.create({ name: "Paula", age: 16, email: "paula@gmail.com" });
    user4.setBands([band2, band3]);
});