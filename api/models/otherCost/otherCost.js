const mongoose = require('../../../db/db');
const { Schema: {Types: { Number, Date }}} = mongoose;

const other = mongoose.Schema({
    date : { type: Number, default: Date.getTime},
    amount: { type: Number, required: false}
 })

module.exports = mongoose.model('Other', other)