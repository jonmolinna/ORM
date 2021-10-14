const express = require('express')

const { sequelize, User, Post } = require('./models');

const app = express();
app.use(express.json());

// Add User
app.post('/users', async(req, res) => {
    const { name, email, role } = req.body;

    try {
        const user = await User.create({ name, email, role })
        return res.json(user)
    } catch (err) {
        console.log(err);
        return res.status(500).json(err)
    }
});

// All Users
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        return res.json(users);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong'})
    }
});

// Get User
app.get('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid
    try {
        const user = await User.findOne({
            where: { uuid },
            include: 'posts',
        });
        return res.json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong'})
    }
});

// Delete User
app.delete('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid
    try {
        const user = await User.findOne({ where: { uuid }})
        await user.destroy();
        return res.json({ message: 'User deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong'})
    }
});

// Update User
app.put('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid
    const { name, email, role } = req.body
    try {
        const user = await User.findOne({ where: { uuid }})
        user.name = name
        user.email = email
        user.role = role

        await user.save()
        
        return res.json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong'})
    }
});

// Add Post
app.post('/posts', async (req, res) => {
    const { userUuid, body } = req.body;
    
    try {
        const user = await User.findOne({ where: { uuid: userUuid }})
        const post = await Post.create({ body, userId: user.id })
        return res.json(post)
    } catch (err) {
        console.log(err);
        return res.status(500).json(err)
    }
});

// All Posts
app.get('/posts', async (req, res) => {
    try {
        //const posts = await Post.findAll({ include: [User] });
        //const posts = await Post.findAll({ include: [{ model: User, as: 'user' }] });
        const posts = await Post.findAll({ include: 'user' });
        return res.json(posts)
    } catch (err) {
        console.log(err);
        return res.status(500).json(err)
    }
});

app.listen({ port: 5000 }, async () => {
    console.log('Server up on http://localhost:5000');
    //await sequelize.sync({ force: true })
    await sequelize.authenticate()
    console.log('Database synced!');
});