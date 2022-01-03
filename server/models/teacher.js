const mongoose = require('mongoose');

//const { ObjectId } = mongoose.Schema;


const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    email: { type: String, required: true, index: true },
    address: String,
    mobile: Number,    
    birthDate: Date,
    startDate: Date,
    degree: String
}, { timestamps: true });



module.exports = mongoose.model('Teacher', teacherSchema);