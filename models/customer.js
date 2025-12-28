const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    cnic: { type: String, required: true },
    model: { type: String, required: true },
    emi: { type: String, required: true },
    date: { type: String, required: true },
    price: { type: String, default: "0" },            // Total Bill
    paidAmount: { type: String, default: "0" },       // Naya: Jitne paise mil gaye
    remainingAmount: { type: String, default: "0" },  // Naya: Jo baqi reh gaye
    type: { type: String, enum: ['Purchase', 'Sale'], default: 'Sale' }
}, { timestamps: true }); 

module.exports = mongoose.model('Customer', CustomerSchema);