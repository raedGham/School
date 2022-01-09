const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;


const classSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    code: String,
    level: String,
    sections: [{ type: ObjectId, ref: "Section" }],
    //   subjects : [{ subject: { type: ObjectId, ref: "Subject" }}]
}, { timestamps: true });



module.exports = mongoose.model('Class', classSchema);