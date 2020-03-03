const mongoose = require('../../../db/db');
const { Schema: {Types: { String, Date, Number}}} = mongoose;

const paymentContract = mongoose.Schema({
    date: { type: String, required: true },
    paymentType: { type: String, required: true },
    rate: { type: Number, required: true },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization',
        required: false
    },
    amount: { type: Number, required: true },
    contrId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contract',
        required: false
    },
 })

module.exports = mongoose.model('PaymentContract', paymentContract)