const mongoose = require('../../../db/db');
const { Schema: {Types: { Array }}} = mongoose;

const credit = mongoose.Schema({
    credit: { type: Array, required: false}
 })

module.exports = mongoose.model('Credit', credit)