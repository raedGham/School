const mongoose = require('mongoose');

//const { ObjectId } = mongoose.Schema;


const schoolYearSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    description: String,
    defaultYear: { type: Boolean, default: false }

}, { timestamps: true });



module.exports = mongoose.model('SchoolYear', schoolYearSchema);