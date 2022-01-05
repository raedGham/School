const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;


const sectionSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },    
    code : String,  
    
}, { timestamps: true });



module.exports = mongoose.model('Section', sectionSchema);