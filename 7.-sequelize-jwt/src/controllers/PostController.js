const { sequelize } = require('../models/index');

module.exports = {
    findPostById: async (req, res, next) => {
        let post = await sequelize.models.post.findByPk(req.params.id);

        if (!post) {
            res.status(404).json({ msg: "Post not found" });
        } else {
            // console.log('POST >>>', post);
            req.post = post;
            next();
        }
    },

    getAllPosts: async (req, res) => {
        let posts = await sequelize.models.post.findAll();

        res.json(posts)
    },

    getPostById: async (req, res) => {
        // let post = await sequelize.models.post.findByPk(req.params.id);
        res.json(req.post);
    },

    updatedPost: async (req, res) => {
        // let post = await sequelize.models.post.findByPk(req.params.id);
        // post.title = req.body.title;
        // post.body = req.body.body;

        req.post.title = req.body.title;
        req.post.body = req.body.body;

        req.post.save().then(post => {
            res.json(post);
        });
    },

    deletePost: async (req, res) => {
        // let post = await sequelize.models.post.findByPk(req.params.id);
        req.post.destroy().then(post => {
            res.json({ msg: "Post deleted" })
        });
    },
};