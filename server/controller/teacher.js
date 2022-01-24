
const Teacher = require('../models/teacher');
const YrTeacherCourses = require('../models/YrTeacherCourses');

exports.create = async (req, res) => {
    try {
        const teacherdata = req.body;
        //   console.log("teacherdata", teacherdata);
        const teacher = await new Teacher(teacherdata).save();
        //       console.log(teacher);
        res.json(teacher);
    } catch (err) {
        //               console.log(err);
        res.status(400).send("Create Teacher failed");
    }
};


exports.list = async (req, res) => {
    try {
        const TearchersList = await Teacher.find({}).sort({ createdAt: -1 }).exec();
        res.json(TearchersList);
    } catch (err) {
        res.status(400).send("Teachers List failed");
    }
};


exports.update = async (req, res) => {
    try {
        const id = req.body._id;
        console.log(id);
        console.log(req.params.id);
        let updated = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
        res.json(updated);
    } catch (err) {
        res.status(400).send("Teacher update failed");
    }
};


exports.remove = async (req, res) => {
    try {
        const deleted = await Teacher.findByIdAndDelete(req.params.id).exec();
        res.json(deleted);
    } catch (err) {
        res.status(400).send("Teacher delete failed");
    }
};

exports.addOrUpdateCourses = async (req, res) => {

    const yrteachercourses = req.body;
    console.log(yrteachercourses);
    const result = await YrTeacherCourses.findOneAndUpdate({ schoolyear: yrteachercourses.schoolyear, teacher: yrteachercourses.teacher }, yrteachercourses, { new: true });

    if (result) {
        res.json(result)
    } else {
        const newTrCourses = await new YrTeacherCourses(yrteachercourses).save();
        console.log("Yr Courses added", newTrCourses);
        res.json(newTrCourses);
    }

}


exports.getCourses = async (req, res) => {
    try {
        const { teacherId, schoolyearId } = req.params;
        console.log("teacher Id", teacherId)
        console.log("schoolyear Id", schoolyearId)
        const TeacherCourses = await YrTeacherCourses.findOne({ schoolyear: schoolyearId, teacher: teacherId }).populate('coursesTaught.course').populate('coursesTaught.section').exec();
        console.log("TeacherCourses", TeacherCourses)
        res.json(TeacherCourses);
        
    } catch (err) {
        res.status(400).send("Teachers Courses failed");
    }
};

exports.getbyemail = async (req, res) => {
    try {

        const teach = await Teacher.find({ email: req.params.email }).exec();
        res.json(teach);
    } catch (err) {
        res.status(400).send("Teacher by email failed");
    }
};
