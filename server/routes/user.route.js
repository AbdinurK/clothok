const userRoutes = require('express').Router();
const User = require('../models/user.model');
const auth = require('../middleware/auth');


userRoutes.route('/add').post((req, res) => {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({ msg: 'user added successfully!' });
        })
        .catch(err => {
            res.status(400).send('adding new user failed!');
        });
});

module.exports = userRoutes;
