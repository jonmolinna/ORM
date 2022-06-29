const { sequelize } = require('../models/index');

module.exports = {
    getPostById: (req, res, next) => {
        if (req.user.id === req.post.userId || sequelize.models.user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: 'No tienes autorización' })
        }
    },

    updatedPost: (req, res, next) => {
        if (req.user.id === req.post.userId || sequelize.models.user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: 'No tienes autorización' })
        }
    },

    deletePost: (req, res, next) => {
        if (req.user.id === req.post.userId || sequelize.models.user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: 'No tienes autorización' })
        }
    },
}