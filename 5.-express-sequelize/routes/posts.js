const express = require('express');
const router = express.Router();
const Post = require('../database/models/Post');
const User = require('../database/models/User');

// INDEX
router.get('/', (req, res) => {
    Post.findAll({
        include: {
            model: User,
            // as: 'autor'
            attributes: ['name']
        },
        attributes: ['title', 'body']
    }).then(posts => {
        res.json(posts)
    });
});

// CREATE
router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        body: req.body.body
    }).then(post => {
        res.json(post)
    })
});

// READ
router.get('/:id', (req, res) => {
    Post.findByPk(req.params.id).then(post => {
        res.json(post)
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    Post.update({
        title: req.body.title,
        body: req.body.body
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

module.exports = router;
