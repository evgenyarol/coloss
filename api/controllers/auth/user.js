const router = require('express').Router();
const User = require('../../models/user/user');
const jwtCheck = require('../../helpers/jwt');
const jwt = require('jwt-simple')
const config = require('../../config/config')

router.post('/register', async (req, res) => {
    if (!req.body.username || !req.body.password){
        return res.sendStatus(400) 
    } else {
        const userData = {
           username: req.body.username,
           password: req.body.password
        }

    await User.findOne(userData)
    .then(user => {
        if (user) {
            return null;
        } else {
            return User.create(userData);
        }
    })
    .then(user => {
        if (user) { 
            return res.sendStatus(201);
        } else {
            return res.status(400).json({ error: 'User already exist!'});
        }
    })
    .catch(err => {
        console.error('User.register', err);
        return res.sendStatus(400);
    })
  }
});

router.post('/login', (req, res) => {
    if (!req.body.username) {
        return res.sendStatus(400) 
    } else {
       const userData = {
           username: req.body.username,
           password: req.body.password
        }

        User.findOne(userData)
        .then(user => {
            if (user) { 
                return res.json({token: jwt.encode(user, config.secretkey)});
            } else {
                return res.status(404).json({ error: 'Username wrong!'});
            }
        })
        .catch(err => {
            console.error('User.login', err);
            return res.sendStatus(400);
        })

    } 
});



router.get('/profile',jwtCheck, (req, res) => {
    const { username, password } = req.jwt;

    User.findOne({username, password})
    .then(user => {
        if (user) { 
            return res.json(user);
        } else {
            return res.status(404).json({ error: 'Username doesn\'t exist!'});
        }
    })
    .catch(err => {
        console.error('User.profile', err);
        return res.sendStatus(400);
    })
});





module.exports = router;