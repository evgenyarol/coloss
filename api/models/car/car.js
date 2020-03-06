const mongoose = require('../../../db/db');
const { Schema: {Types: { String, Number }}} = mongoose;

const car = mongoose.Schema({
    mark: { type: String, required: true},
    gosNumber: { type: String, required: true},
    rent: { type: Number, required: true},
    buyout: { type: Number, required: true},
    amountBuyout: { type: Number, required: true},
    status: { type: String, required: true},
 })

module.exports = mongoose.model('Car', car)