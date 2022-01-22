const mongoose = require('mongoose');

//const { ObjectId } = mongoose.Schema;


const subSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    code: String,
    gradeOn: { type: Number, required: true, min: 0, max: 100 }
}, { timestamps: true });



module.exports = mongoose.model('Sub', subSchema);