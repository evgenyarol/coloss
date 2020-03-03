const mongoose = require('../../../db/db');
const { Schema: {Types: { String, Number}}} = mongoose;

const tenant = mongoose.Schema({
    username: { type: String, required: true},
    passport: { type: String, required: true},
    phone: { type: Number, required: true},
    adress: { type: String, required: true},
    rating: { type: Number, required: true},
    status: { type: String, required: true},
 })

module.exports = mongoose.model('Tenant', tenant)