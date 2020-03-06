const mongoose = require('../../../db/db');
const { Schema: {Types: { Number }}} = mongoose;

const salary = mongoose.Schema({
    amount: { type: Number, required: false}
 })

module.exports = mongoose.model('Salary', salary)