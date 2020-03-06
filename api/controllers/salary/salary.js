const router = require('express').Router();
const Salary = require('../../models/salary/salary');


router.post('/', async (req, res) => {
    const { amount } = req.body;
    const { _id } = req.jwt;

    await Salary
    .create({owner: _id, amount })
    .then(salary => {
        return res.json(salary);
    })
    .catch(err => {
        console.error('Salary.Salary.post', err);
        return res.sendStatus(400);
    });
});


router.get('/', async (req, res) => {

    await Salary
    .aggregate( [ {$group :{ _id : "Salary", total_salary: { $sum : "$amount" }}} ] )
    .then(salary => {
        return res.json(salary);
    })
    .catch(err => {
        console.error('Salary.Salary', err);
        return res.sendStatus(400);
    });
});


module.exports = router;