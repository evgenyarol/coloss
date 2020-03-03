const router = require('express').Router();
const Contract = require('../../models/contract/contract');

router.post('/', async (req, res) => {
    const { contractId , date , contractType , rate, car, tenant, phone, paymentContract } = req.body;
    const { _id } = req.jwt;

    await Contract
    .create({owner: _id, contractId , date , contractType , rate, car, tenant, phone, paymentContract })
    .then(contract => {
        return res.json(contract);
    })
    .catch(err => {
        console.error('Contract.Contract.post', err);
        return res.sendStatus(400);
    });
});

router.post('/abc', async (req, res) => {
    const { contractId , date , contractType , rate, car, tenant, phone, paymentContract } = req.body;
    const { _id } = req.jwt;

    await Contract
    .findById({owner: _id, contractId , date , contractType , rate, car, tenant, phone, paymentContract })
    .then(contract => {
        return res.json(contract);
    })
    .catch(err => {
        console.error('Contract.Contract.post', err);
        return res.sendStatus(400);
    });
});


router.get('/', async (req, res) => {
    const { _id } = req.body;

    await Contract
    .find({owner: _id})
    .populate('car')
    .populate('tenant')
    .populate('paymentContract')
    .then(contract => {
        return res.json(contract);
    })
    .catch(err => {
        console.error('Contract.Contract', err);
        return res.sendStatus(400);
    });
});


router.put('/:id', async (req, res) => {
    const { contractId , date , contractType , rate, car, tenant, phone } = req.body;
    const id = req.params.id;
    const { _id } = req.body;
    

    await Contract
    .updateOne({owner: _id, _id: id}, { $set: { contractId , date , contractType , rate, car, tenant, phone }})
    .then(contract => {
            return res.json(contract);
    })
    .catch(err => {
            console.error('Contract.Contract.put', err);
            return res.sendStatus(400);
    });
});


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const { _id } = req.body;
  
    await Contract
    .deleteOne({owner: _id, _id: id})
    .then(contract => {
        return res.json(contract);
    })
    .catch(err => {
        console.error('Contract.Contract.delete', err);
        return res.sendStatus(400);
    });
});

module.exports = router;