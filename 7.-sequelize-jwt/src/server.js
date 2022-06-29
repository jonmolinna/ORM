const express = require('express');
const { sequelize } = require('./models/index');
const app = express();

// Settings
const PORT = process.env.PORT || 9000

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get('/', (req, res) => {
    res.json({ msg: "Hola Mundo" })
});

app.use('/api', require('./routes'));

// Listen to server
app.listen(PORT, () => {
    console.log(`Server listen to port ${PORT}`);

    sequelize.authenticate().then(() => {
        console.log('BD is connected');
    })
});