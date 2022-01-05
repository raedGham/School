const Section = require('../models/section');


exports.create = async (req, res) => {
    try {
        const  subdata  = req.body;
     //   console.log("subdata", subdata);
        const sub = await new Section(subdata).save();
 //       console.log(sub);
        res.json(sub);
    } catch (err) {
 //               console.log(err);
        res.status(400).send("Create section failed");
    }
};


exports.list = async (req, res) => {
    try {
        const sectionList = await Section.find({}).sort({ name: -1 }).exec();
        res.json(sectionList);
    } catch (err) {
        res.status(400).send("Sub Subjects List failed");
    }
};


exports.update = async (req, res) => {
    try {
        // const id =  req.body._id;
        // console.log(id);
        // console.log(req.params.id);
        let updated = await Section.findByIdAndUpdate( req.params.id , req.body, { new: true }).exec();        
        res.json(updated);
    } catch (err) {
        res.status(400).send("Section update failed");
    }
};


exports.remove = async (req, res) => {
    try {
        const deleted = await Section.findByIdAndDelete(req.params.id ).exec();
        res.json(deleted);
    } catch (err) {
        res.status(400).send("Section delete failed");
    }
};
