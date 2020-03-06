const router = require('express').Router();
const Credit = require('../../../models/credit/credit');


router.post('/', async (req, res) => {
    const { amount } = req.body;
    const { _id } = req.jwt;
    let  date = new Date().getTime();

    await Credit
    .create({owner: _id, amount, date })
    .then(credit => {
        return res.json(credit);
    })
    .catch(err => {
        console.error('Credit.Credit.post', err);
        return res.sendStatus(400);
    });
});


router.get('/', async (req, res) => {
    const selection = {'date': {$gte : req.query.min, $lte: req.query.max}}

    await Credit
    .find(selection)
    .then(credit => {
        return res.json(credit);
    })
    .catch(err => {
        console.error('Credit.Credit', err);
        return res.sendStatus(400);
    });
});


router.get('/total', async (req, res) => {

    await Credit
    .aggregate( [ {$group :{ _id : "Credit", totalCost: { $sum : "$amount" }}} ] )
    .then(credit => {
        return res.json(credit);
    })
    .catch(err => {
        console.error('Credit.Credit', err);
        return res.sendStatus(400);
    });
});


module.exports = router;