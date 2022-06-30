const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Rutes
app.get("/", (req, res) => {
    res.json({ msg: "I am Backend" })
});

app.use('/api/user', require('./routes/user'));
app.use('/api/post', require('./routes/post'));

// Listen to server
app.listen(5000, () => {
    console.log("Listening on port 5000");
});