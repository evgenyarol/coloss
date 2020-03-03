const router = require('express').Router();
const Tenant = require('../../models/tenant/tenant');

router.post('/', async (req, res) => {
    const { username , passport , phone , adress, rating, status } = req.body;
    const { _id } = req.jwt;

    await Tenant
    .create({owner: _id, username , passport , phone , adress, rating, status })
    .then(tenant => {
        return res.json(tenant);
    })
    .catch(err => {
        console.error('Tenant.Tenant.post', err);
        return res.sendStatus(400);
    });
});


router.get('/', async (req, res) => {
    const { _id } = req.body;

    await Tenant
    .find({owner: _id})
    .then(tenant => {
        return res.json(tenant);
    })
    .catch(err => {
        console.error('Tenant.Tenant', err);
        return res.sendStatus(400);
    });
});


router.put('/:id', async (req, res) => {
    const { username , passport , phone , adress, rating, status } = req.body;
    const id = req.params.id;
    const { _id } = req.body;
    

    await Tenant
    .updateOne({owner: _id, _id: id}, { $set: { username , passport , phone , adress, rating, status }})
    .then(tenant => {
            return res.json(tenant);
    })
    .catch(err => {
            console.error('Tenant.Tenant.put', err);
            return res.sendStatus(400);
    });
});


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const { _id } = req.body;
  
    await Tenant
    .deleteOne({owner: _id, _id: id})
    .then(tenant => {
        return res.json(tenant);
    })
    .catch(err => {
        console.error('Tenant.Tenant.delete', err);
        return res.sendStatus(400);
    });
});

module.exports = router;