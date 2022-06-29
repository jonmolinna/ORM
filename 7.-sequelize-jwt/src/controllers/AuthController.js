const { sequelize } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

module.exports = {
    login: (req, res) => {
        let { email, password } = req.body;

        sequelize.models.user.findOne({
            where: {
                email
            }
        }).then(user => {
            if (!user) res.status(404).json({ msg: 'User not found' });

            if (!(bcrypt.compareSync(password, user.password))) {
                res.status(401).json({ msg: 'Contraseña incorrecta' })
            }

            let token = jwt.sign({ user: user }, authConfig.secret, { expiresIn: authConfig.expires });
            res.json({ user, token });

        }).catch(err => {
            res.status(500).json(err)
        })
    },

    register: (req, res) => {
        let password = bcrypt.hashSync(req.body.password, +authConfig.rounds);

        sequelize.models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: password
        }).then(user => {
            let token = jwt.sign({ user: user }, authConfig.secret, { expiresIn: authConfig.expires });

            res.json({ user, token });
        }).catch(err => {
            res.status(500).json(err)
        });
    }
}