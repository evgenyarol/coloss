const router = require('express').Router();
const Organization = require('../../models/organization/organization');


router.post('/', async (req, res) => {
    const { username , phone , money } = req.body;
    const { _id } = req.jwt;

    await Organization
    .create({owner: _id, username , phone , money })
    .then(organization => {
        return res.json(organization);
    })
    .catch(err => {
        console.error('Organization.Organization.post', err);
        return res.sendStatus(400);
    });
});


router.get('/', async (req, res) => {
    const { _id } = req.body;

    await Organization
    .find({owner: _id})
    .then(organizations => {
        return res.json(organizations);
    })
    .catch(err => {
        console.error('Organization.Organization', err);
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