// const { User } = require('../database/db');
const { User } = require('../models/index');

module.exports = {
    async getAllUsers(req, res) {
        let users = await User.findAll({
            include: {
                association: "domicilio",
                attributes: ['street']
            }
        });

        res.json(users);
    }
};