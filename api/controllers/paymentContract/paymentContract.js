const router = require('express').Router();
const PaymentContract = require('../../models/paymentContract/paymentContract');


router.post('/', async (req, res) => {
    const { date , paymentType , rate, organization, amount, contrId } = req.body;
    const { _id } = req.jwt;

    await PaymentContract
    .create({owner: _id, date , paymentType , rate, organization, amount, contrId })
    .then(PaymentContract => {
        return res.json(PaymentContract);
    })
    .catch(err => {
        console.error('PaymentContract.PaymentContract.post', err);
        return res.sendStatus(400);
    });
});


router.get('/', async (req, res) => {
    const { _id } = req.body;

    await PaymentContract
    .find({owner: _id})
    .populate('contrId')
    .then(paymentContract => {
        return res.json(paymentContract);
    })
    .catch(err => {
        console.error('PaymentContract.PaymentContract', err);
        return res.sendStatus(400);
    });
});


router.put('/:id', async (req, res) => {
    const { username , phone , money } = req.body;
    const id = req.params.id;
    const { _id } = req.body;
    

    await Organization
    .updateOne({owner: _id, _id: id}, { $set: { username , phone , money }})
    .then(organization => {
            return res.json(organization);
    })
    .catch(err => {
            console.error('Organization.Organization.put', err);
            return res.sendStatus(400);
    });
});


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const { _id } = req.body;
  
    await Organization
    .deleteOne({owner: _id, _id: id})
    .then(organization => {
        return res.json(organization);
    })
    .catch(err => {
        console.error('Organization.Organization.delete', err);
        return res.sendStatus(400);
    });
});

module.exports = router;