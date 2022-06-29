const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
const { sequelize } = require('../models/index');

module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).json({ msg: 'Acceso no autorizado' });
    } else {
        // comprobar el token
        const token = req.headers.authorization.split(" ")[1];

        // Comprobar la validez del token
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) {
                res.status(500).json({ msg: 'Ocurrio un error con el token', err })
            } else {
                // req.user = decoded.user;
                sequelize.models.user.findByPk(decoded.user.id, { include: "roles" }).then(user => {
                    // console.log('YOOOO', user);
                    req.user = user;
                    next();
                })
            }
        });
    }
};