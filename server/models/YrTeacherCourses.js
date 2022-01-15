const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;


const YrTeacherCoursesSchema = new mongoose.Schema({

    schoolyear: { type: ObjectId, ref: "SchoolYear" },
    teacher: { type: ObjectId, ref: "Teacher" },
    coursesTaught: [{
        course: { type: ObjectId, ref: "Course" },
        section: { type: ObjectId, ref: "Section" }
    }]


}, { timestamps: true });



module.exports = mongoose.model('YrTeacherCourses', YrTeacherCoursesSchema);