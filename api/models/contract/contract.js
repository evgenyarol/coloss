const mongoose = require('../../../db/db');
const { Schema: {Types: { String, Object, Number}}} = mongoose;

const contract = mongoose.Schema({
    contractId: { type: Number, required: true },
    date: { type: String, required: true },
    contractType: { type: String, required: true },
    rate: { type: Number, required: true },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: false
    },
    tenant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant',
        required: false
    },
    paymentContract: {
        type: Object,
        ref: 'PaymentContract',
        required: false
    },
    parking: {
        type: Object,
        required: false
    },
    phone: { type: Number, required: true },
 })

module.exports = mongoose.model('Contract', contract)