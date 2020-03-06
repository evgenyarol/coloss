const router = require('express').Router();
const Office = require('../../../models/office/office');


router.post('/', async (req, res) => {
    const { amount } = req.body;
    const { _id } = req.jwt;
    let  date = new Date().getTime();

    await Office
    .create({owner: _id, amount, date })
    .then(office => {
        return res.json(office);
    })
    .catch(err => {
        console.error('Office.Office.post', err);
        return res.sendStatus(400);
    });
});


router.get('/', async (req, res) => {
    const selection = {'date': {$gte : req.query.min, $lte: req.query.max}}

    await Office
    .find(selection)
    .then(office => {
        return res.json(office);
    })
    .catch(err => {
        console.error('Office.Office', err);
        return res.sendStatus(400);
    });
});


router.get('/total', async (req, res) => {

    await Office
    .aggregate( [ {$group :{ _id : "Office", totalCost: { $sum : "$amount" }}} ] )
    .then(office => {
        return res.json(office);
    })
    .catch(err => {
        console.error('Office.Office', err);
        return res.sendStatus(400);
    });
});


module.exports = router;