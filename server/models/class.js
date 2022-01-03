const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema;


const classSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },    
    code : String,    
}, { timestamps: true });



module.exports = mongoose.model('Class', classSchema);