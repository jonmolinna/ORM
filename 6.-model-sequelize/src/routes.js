const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

// Home API
router.get('/', (req, res) => res.json({ msg: 'Hola Mundo' }))

// Users
router.get('/users', UserController.getAllUsers);
router.get('/address', AddressController.getAllAddress);

module.exports = router;