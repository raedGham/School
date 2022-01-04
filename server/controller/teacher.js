
const Teacher = require('../models/teacher');


exports.create = async (req, res) => {
    try {
        const  teacherdata  = req.body;
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
        const id =  req.body._id;
        console.log(id);
        console.log(req.params.id);
        let updated = await Teacher.findByIdAndUpdate( req.params.id , req.body, { new: true }).exec();        
        res.json(updated);
    } catch (err) {
        res.status(400).send("Teacher update failed");
    }
};


exports.remove = async (req, res) => {
    try {
        const deleted = await Teacher.findByIdAndDelete(req.params.id ).exec();
        res.json(deleted);
    } catch (err) {
        res.status(400).send("Teacher delete failed");
    }
};
