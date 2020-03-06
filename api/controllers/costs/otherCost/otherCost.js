const router = require('express').Router();
const Other = require('../../../models/otherCost/otherCost');


router.post('/', async (req, res) => {
    const { amount } = req.body;
    const { _id } = req.jwt;
    let  date = new Date().getTime();

    await Other
    .create({owner: _id, amount, date })
    .then(other => {
        return res.json(other);
    })
    .catch(err => {
        console.error('Other.Other.post', err);
        return res.sendStatus(400);
    });
});


router.get('/', async (req, res) => {
    const selection = {'date': {$gte : req.query.min, $lte: req.query.max}}

    await Other
    .find(selection)
    .then(other => {
        return res.json(other);
    })
    .catch(err => {
        console.error('Other.Other', err);
        return res.sendStatus(400);
    });
});


router.get('/total', async (req, res) => {

    await Other
    .aggregate( [ {$group :{ _id : "Other", totalCost: { $sum : "$amount" }}} ] )
    .then(other => {
        return res.json(other);
    })
    .catch(err => {
        console.error('Other.Other', err);
        return res.sendStatus(400);
    });
});


module.exports = router;
