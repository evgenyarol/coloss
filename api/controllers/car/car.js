const router = require('express').Router();
const Car = require('../../models/car/car');

router.post('/', async (req, res) => {
    const { mark , gosNumber , rent , buyout, amountBuyout, status } = req.body;
    const { _id } = req.jwt;

    await Car
    .create({owner: _id, mark, gosNumber, rent, buyout, amountBuyout, status})
    .then(car => {
        return res.json(car);
    })
    .catch(err => {
        console.error('Car.Car.post', err);
        return res.sendStatus(400);
    });
});


router.get('/', async (req, res) => {
    const { _id } = req.body;

    await Car
    .find({owner: _id})
    .then(cars => {
        return res.json(cars);
    })
    .catch(err => {
        console.error('Car.Car', err);
        return res.sendStatus(400);
    });
});


router.put('/:id', async (req, res) => {
    const { mark , gosNumber , rent , buyout, amountBuyout, status } = req.body;
    const id = req.params.id;
    const { _id } = req.body;
    

    await Car
    .updateOne({owner: _id, _id: id}, { $set: {mark , gosNumber , rent , buyout, amountBuyout, status}})
    .then(car => {
            return res.json(car);
    })
    .catch(err => {
            console.error('Car.Car.put', err);
            return res.sendStatus(400);
    });
});


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const { _id } = req.body;
  
    await Car
    .deleteOne({owner: _id, _id: id})
    .then(car => {
        return res.json(car);
    })
    .catch(err => {
        console.error('Car.Car.delete', err);
        return res.sendStatus(400);
    });
});

module.exports = router;