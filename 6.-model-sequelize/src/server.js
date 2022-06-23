const express = require('express');
const app = express();
// const { connection } = require('./database/db');
const { sequelize } = require('./models/index');

// Settings
const PORT = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get('/', (req, res) => {
    res.json({ msg: "Hola Mundo " })
});

// app.use('/api', require('./routes'));

// Server
app.listen(PORT, () => {
    console.log(`Listen to server at http://localhost:${PORT}`);

    // connection.sync({ force: false }).then(() => {
    //     console.log('Se ha establecido la conexion.');
    // })

    sequelize.sync({ force: false }).then(() => {
        console.log('Se ha establecido la conexion.');
    });

    // sequelize.aunthenticated().then(() => {
    //     console.log('Se ha establecido la conexion.');
    // });
});