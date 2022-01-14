
const SchoolYear = require('../models/schoolYear');


exports.create = async (req, res) => {
    try {
        const yeardata = req.body;

        const schoolYear = await new SchoolYear(yeardata).save();
        console.log(schoolYear);
        res.json(schoolYear);
    } catch (err) {
        console.log(err);
        res.status(400).send("Create schoolyear failed");
    }
};


exports.list = async (req, res) => {
    try {
        const SchoolYearsList = await SchoolYear.find({}).sort({ createdAt: -1 }).exec();
        res.json(SchoolYearsList);
    } catch (err) {
        res.status(400).send("SchoolYears List failed");
    }
};


exports.update = async (req, res) => {
    try {
        const id = req.body._id;
        console.log(id);
        console.log(req.params.id);
        let updated = await SchoolYear.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
        res.json(updated);
    } catch (err) {
        res.status(400).send("SchoolYear update failed");
    }
};


exports.remove = async (req, res) => {
    try {
        const deleted = await SchoolYear.findByIdAndDelete(req.params.id).exec();
        res.json(deleted);
    } catch (err) {
        res.status(400).send("SchoolYear delete failed");
    }
};


