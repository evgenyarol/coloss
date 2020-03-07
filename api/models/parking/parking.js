const mongoose = require('../../../db/db');
const { Schema: {Types: { Number }}} = mongoose;

const parking = mongoose.Schema({
    amount: { type: Number, required: true },
 })

module.exports = mongoose.model('Parking', parking)