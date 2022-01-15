const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;


const YrStudentsSectionsSchema = new mongoose.Schema({

    schoolyear: { type: ObjectId, ref: "SchoolYear" },
    section: { type: ObjectId, ref: "Section" },
    students: [{ type: ObjectId, ref: "Student" }]


}, { timestamps: true });



module.exports = mongoose.model('YrStudentsSections', YrStudentsSectionsSchema);