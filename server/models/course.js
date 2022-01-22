const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;


const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    code: String,
    gradeOn: { type: Number, required: true, min: 0, max: 100 },
    subs: [{ type: ObjectId, ref: "Sub" }]

}, { timestamps: true });



module.exports = mongoose.model('Course', courseSchema);