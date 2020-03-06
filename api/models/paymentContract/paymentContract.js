const mongoose = require('../../../db/db');
const { Schema: {Types: { String, Number}}} = mongoose;

const paymentContract = mongoose.Schema({
    date: { type: String, required: true },
    paymentType: { type: String, required: true },
    rate: { type: Number, required: true },
    organization:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization',
        required: true
    },
    amount: { type: Number, required: true },
 })

module.exports = mongoose.model('PaymentContract', paymentContract)