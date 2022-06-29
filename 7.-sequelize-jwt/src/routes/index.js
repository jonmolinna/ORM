const express = require('express');
const router = express.Router();

// Middleware
const auth = require('../middlewares/auth');

// Controllers
const AuthController = require('../controllers/AuthController');
const PostController = require('../controllers/PostController');

// Policies
const PostPolicy = require('../policies/PostPolicy');

// Home
router.get('/', (req, res) => {
    res.json({ msg: 'I am backend' })
});

// Login and Register
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

// Rutas Post
router.get('/post', auth, PostController.getAllPosts);
router.get('/post/:id', auth, PostController.findPostById, PostPolicy.getPostById, PostController.getPostById);
router.put('/post/:id', auth, PostController.findPostById, PostPolicy.updatedPost, PostController.updatedPost);
router.delete('/post/:id', auth, PostController.findPostById, PostPolicy.deletePost, PostController.deletePost);

module.exports = router;