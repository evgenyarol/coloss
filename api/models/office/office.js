const mongoose = require('../../../db/db');
const { Schema: {Types: { Number, Date }}} = mongoose;

const office = mongoose.Schema({
    date : { type: Number, default: Date.Now},
    amount: { type: Number, required: false}
 })

module.exports = mongoose.model('Office', office)