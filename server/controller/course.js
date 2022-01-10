const Course = require('../models/course');


exports.create = async (req, res) => {
    try {
        const  subdata  = req.body;
     //   console.log("subdata", subdata);
        const course = await new Course(subdata).save();
 //       console.log(course);
        res.json(course);
    } catch (err) {
 //               console.log(err);
        res.status(400).send("Create course failed");
    }
};


exports.list = async (req, res) => {
    try {
        const courseList = await Course.find({}).sort({ name: 1 }).populate('subs').exec();
        res.json(courseList);
    } catch (err) {
        res.status(400).send("Courses List failed");
    }
};


exports.update = async (req, res) => {
    try {
        const id =  req.body._id;
        console.log(id);
        console.log(req.params.id);
        let updated = await Course.findByIdAndUpdate( req.params.id , req.body, { new: true }).exec();        
        res.json(updated);
    } catch (err) {
        res.status(400).send("Course update failed");
    }
};


exports.remove = async (req, res) => {
    try {
        const deleted = await Course.findByIdAndDelete(req.params.id ).exec();
        res.json(deleted);
    } catch (err) {
        res.status(400).send("Course delete failed");
    }
};
