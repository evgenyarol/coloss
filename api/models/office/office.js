const mongoose = require('../../../db/db');
const { Schema: {Types: { Array }}} = mongoose;

const office = mongoose.Schema({
    office: { type: Array, required: false}
 })

module.exports = mongoose.model('Office', office)