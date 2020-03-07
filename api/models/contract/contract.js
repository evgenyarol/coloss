const mongoose = require('../../../db/db');
const { Schema: {Types: { String, Object, Number}}} = mongoose;

const contract = mongoose.Schema({
    contractId: { type: Number, required: true },
    date : { type: Number, default: Date.Now},
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
        ref: 'Parking',
        required: false
    },
    phone: { type: Number, required: true },
 })

module.exports = mongoose.model('Contract', contract)