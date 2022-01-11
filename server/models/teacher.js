const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;


const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    email: { type: String, required: true, index: true },
    address: String,
    mobile: Number,    
    birthDate: Date,
    startDate: Date,
    degree: String,
    hasAccount: {type: Boolean, default: false} ,
    account:  { type: ObjectId, ref: "User" }
}, { timestamps: true });



module.exports = mongoose.model('Teacher', teacherSchema);