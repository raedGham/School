const Subject = require('../models/subject');


exports.create = async (req, res) => {
    try {
        const  subdata  = req.body;
     //   console.log("subdata", subdata);
        const subject = await new Subject(subdata).save();
 //       console.log(subject);
        res.json(subject);
    } catch (err) {
 //               console.log(err);
        res.status(400).send("Create subject failed");
    }
};


exports.list = async (req, res) => {
    try {
        const subjectList = await Subject.find({}).sort({ name: -1 }).exec();
        res.json(subjectList);
    } catch (err) {
        res.status(400).send("Subjects List failed");
    }
};


exports.update = async (req, res) => {
    try {
        const id =  req.body._id;
        console.log(id);
        console.log(req.params.id);
        let updated = await Subject.findByIdAndUpdate( req.params.id , req.body, { new: true }).exec();        
        res.json(updated);
    } catch (err) {
        res.status(400).send("SubSubject update failed");
    }
};


exports.remove = async (req, res) => {
    try {
        const deleted = await Subject.findByIdAndDelete(req.params.id ).exec();
        res.json(deleted);
    } catch (err) {
        res.status(400).send("Subject delete failed");
    }
};
