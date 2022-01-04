const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;


const studentSchema = new mongoose.Schema({
    code: { type: String, required: true,  unique: true},
    name: { type: String, required: true, index: true },
    email: { type: String, required: true, index: true },
    address: String,
    mobile: Number,
    birthDate: Date,    
    area: String,
    
}, { timestamps: true });



module.exports = mongoose.model('Student', studentSchema);