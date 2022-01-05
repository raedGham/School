const subSubject = require('../models/subSubject');


exports.create = async (req, res) => {
    try {
        const  subdata  = req.body;
     //   console.log("subdata", subdata);
        const sub = await new subSubject(subdata).save();
 //       console.log(sub);
        res.json(sub);
    } catch (err) {
 //               console.log(err);
        res.status(400).send("Create subSubject failed");
    }
};


exports.list = async (req, res) => {
    try {
        const subsList = await subSubject.find({}).sort({ name: -1 }).exec();
        res.json(subsList);
    } catch (err) {
        res.status(400).send("Sub Subjects List failed");
    }
};


exports.update = async (req, res) => {
    try {
        const id =  req.body._id;
        console.log(id);
        console.log(req.params.id);
        let updated = await subSubject.findByIdAndUpdate( req.params.id , req.body, { new: true }).exec();        
        res.json(updated);
    } catch (err) {
        res.status(400).send("SubSubject update failed");
    }
};


exports.remove = async (req, res) => {
    try {
        const deleted = await subSubject.findByIdAndDelete(req.params.id ).exec();
        res.json(deleted);
    } catch (err) {
        res.status(400).send("sub Subject delete failed");
    }
};
