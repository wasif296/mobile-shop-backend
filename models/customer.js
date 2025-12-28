const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    cnic: { type: String, required: true },
    model: { type: String, required: true },
    emi: { type: String, required: true }, // Isay aap Receipt No ya EMI No dono keh sakte hain
    date: { type: String, required: true },
    price: { type: String, default: "0" }, // Mobile ki keemat
    type: { type: String, enum: ['Purchase', 'Sale'], default: 'Purchase' } // Purchase ya Sale
}, { timestamps: true }); 

module.exports = mongoose.model('Customer', CustomerSchema);