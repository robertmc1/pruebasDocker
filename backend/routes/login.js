const router = require('express').Router();
const { UserModel } = require('../models/user');

router.post('/', (req, res) => {
    console.log('post to login!');

    UserModel.find({
        email: req.body.email,
        password: req.body.password

    })
    .then(users => {
        if (users.length === 1) {
            users[0].generateAuthToken().then(token => {

                res.json({ token: token });
            });

        } else {
            res.status(401).json({ response: 'logged incorrect' });
        }

    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;
