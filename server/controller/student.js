
const Student = require('../models/student');


exports.create = async (req, res) => {
    try {
        const  studentdata  = req.body;
     //   console.log("teacherdata", teacherdata);
        const student = await new Student(studentdata).save();
 //       console.log(teacher);
        res.json(teacher);
    } catch (err) {
 //               console.log(err);
        res.status(400).send("Create Student failed");
    }
};


exports.list = async (req, res) => {
    try {
        const StudentsList = await Student.find({}).sort({ createdAt: -1 }).exec();
        res.json(StudentsList);
    } catch (err) {
        res.status(400).send("Students List failed");
    }
};


exports.update = async (req, res) => {
    try {
        const id =  req.body._id;
        console.log(id);
        console.log(req.params.id);
        let updated = await Student.findByIdAndUpdate( req.params.id , req.body, { new: true }).exec();        
        res.json(updated);
    } catch (err) {
        res.status(400).send("Student update failed");
    }
};


exports.remove = async (req, res) => {
    try {
        const deleted = await Student.findByIdAndDelete(req.params.id ).exec();
        res.json(deleted);
    } catch (err) {
        res.status(400).send("Student delete failed");
    }
};
