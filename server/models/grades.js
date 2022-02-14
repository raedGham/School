const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;


const gradesSchema = new mongoose.Schema({

    student: { type: ObjectId, ref: "student" },
    course: { type: ObjectId, ref: "Course" },
    schoolYear: { type: ObjectId, ref: "SchoolYear" },
    section: { type: ObjectId, ref: "Section" },
    grade1: { type: Number, min: 0, max: 100 },
    grade2: { type: Number, min: 0, max: 100 },
    grade3: { type: Number, min: 0, max: 100 },
    grade4: { type: Number, min: 0, max: 100 },
    teacher: { type: ObjectId, ref: "Teacher" },

}, { timestamps: true });



module.exports = mongoose.model('Grades', gradesSchema);