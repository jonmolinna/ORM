const express = require('express');
const Address = require('../database/models/Address');
const Post = require('../database/models/Post');
const router = express.Router();
const User = require('../database/models/User');

// GET ALL
router.get('/', (req, res) => {
    User.findAll({
        attributes: ['name', 'age'],
        // include: 'address'
        include: [
            {
                model: Address,
                // as: "domicilio",
                attributes: ['street']
            },
            {
                model: Post,
                attributes: ['title', 'body'],
                // where: {
                //     title: "Foo"
                // }
            }
        ]
    })
        .then(users => res.json(users));
});

// ver la direccion del usuario
router.get('/:id/street', (req, res) => {
    User.findByPk(req.params.id).then(user => {
        user.getAddress().then(address => {
            res.json(address)
        })
    })
});

// ver todas las publicaciones
router.get('/:id/post', (req, res) => {
    User.findByPk(req.params.id).then(user => {
        user.getPosts().then(posts => {
            res.json(posts)
        })
    })
});

// ver las bandas del user
router.get('/:id/bandas', (req, res) => {
    User.findByPk(req.params.id).then(user => {
        user.getBands({ attributes: ['name', 'type'] }).then(bands => {
            res.json(bands)
        })
    })
});

// CREATE
router.post('/', (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    }).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err)
    });
});

// router.post('/', (req, res) => {
//     User.create({
//         name: req.body.name,
//         email: req.body.email,
//         age: req.body.age,
//         address: {
//             street: req.body.street,
//         }
//     }, {
//         include: "address"
//     }).then(user => {
//         res.json(user);
//     }).catch(err => {
//         res.json(err)
//     });
// });

module.exports = router;