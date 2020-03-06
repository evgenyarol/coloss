const router = require('express').Router();
const Office = require('../../models/office/office');


router.post('/', async (req, res) => {
    const { amount } = req.body;
    const { _id } = req.jwt;

    await Office
    .create({owner: _id, amount })
    .then(office => {
        return res.json(office);
    })
    .catch(err => {
        console.error('Office.Office.post', err);
        return res.sendStatus(400);
    });
});


router.get('/', async (req, res) => {

    await Office
    .aggregate( [ {$group :{ _id : "Office", total_salary: { $sum : "$amount" }}} ] )
    .then(office => {
        return res.json(office);
    })
    .catch(err => {
        console.error('Office.Office', err);
        return res.sendStatus(400);
    });
});


module.exports = router;