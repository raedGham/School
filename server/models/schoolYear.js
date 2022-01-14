const mongoose = require('mongoose');

//const { ObjectId } = mongoose.Schema;


const schoolYearSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    description: String,

}, { timestamps: true });



module.exports = mongoose.model('SchoolYear', schoolYearSchema);