const Class = require('../models/class');


exports.create = async (req, res) => {
    try {
      const classs = await new Class(req.body).save();
        //       console.log(classs);
        res.json(classs);
    } catch (err) {
        //               console.log(err);
        res.status(400).send("Create class failed");
    }
};


exports.list = async (req, res) => {
    try {
        const classList = await Class.find({}).sort({ name: -1 }).populate('sections').exec();
        res.json(classList);
    } catch (err) {
        res.status(400).send("class List failed");
    }
};


exports.update = async (req, res) => {
    try {
        // const id =  req.body._id;
        // console.log(id);
        // console.log(req.params.id);
        let updated = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
        res.json(updated);
    } catch (err) {
        res.status(400).send("Class update failed");
    }
};


exports.remove = async (req, res) => {
    try {
        const deleted = await Class.findByIdAndDelete(req.params.id).exec();
        res.json(deleted);
    } catch (err) {
        res.status(400).send("class delete failed");
    }
};
