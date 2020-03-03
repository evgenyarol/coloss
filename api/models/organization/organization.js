const mongoose = require('../../../db/db');
const { Schema: {Types: { String, Boolean, Number}}} = mongoose;

const organization = mongoose.Schema({
    username: { type: String, required: true},
    phone: { type: Number, required: true},
    money: { type: String, required: true},
 })

module.exports = mongoose.model('Organization', organization)