const subCourse = require('../models/subCourse');


exports.create = async (req, res) => {
    try {
        const subdata = req.body;
        //   console.log("subdata", subdata);
        const sub = await new subCourse(subdata).save();
        //       console.log(sub);
        res.json(sub);
    } catch (err) {
        //               console.log(err);
        res.status(400).send("Create subCourse failed");
    }
};


exports.list = async (req, res) => {
    try {
        const subsList = await subCourse.find({}).sort({ code: 1 }).exec();
        res.json(subsList);

    } catch (err) {
        res.status(400).send("Sub Courses List failed");
    }
};


exports.update = async (req, res) => {
    try {
        const id = req.body._id;
        console.log(id);
        console.log(req.params.id);
        let updated = await subCourse.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
        res.json(updated);
    } catch (err) {
        res.status(400).send("SubCourse update failed");
    }
};


exports.remove = async (req, res) => {
    try {
        const deleted = await subCourse.findByIdAndDelete(req.params.id).exec();
        res.json(deleted);
    } catch (err) {
        res.status(400).send("sub Course delete failed");
    }
};
