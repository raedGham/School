const mongoose = require('mongoose');

//const { ObjectId } = mongoose.Schema;


const subSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },    
    code : String,   
    gradeOn: Number,
}, { timestamps: true });



module.exports = mongoose.model('Sub', subSchema);