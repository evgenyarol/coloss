const mongoose = require('../../../db/db');
const { Schema: {Types: { Array }}} = mongoose;

const other = mongoose.Schema({
    other: { type: Array, required: false}
 })

module.exports = mongoose.model('Other', other)