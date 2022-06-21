const express = require('express');
const app = express();
const sequelize = require('./database/db');
require('./database/asociations');

// Settings
const PORT = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get('/', (req, res) => {
    res.json('Hola Mundo')
});

app.use('/api/posts', require('./routes/posts'));
app.use('/api/users', require('./routes/users'));
app.use('/api/addresses', require('./routes/addresses'));

// Server
app.listen(PORT, () => {
    console.log(`La app listen to port http://localhost:${PORT}`);

    // Conectando BD
    // force true: DROP TABLES
    sequelize.sync({ force: false }).then(() => {
        console.log('DB is connected');
    }).catch(err => {
        console.log('Se a producido un error', err);
    })
});