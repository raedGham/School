const Grades = require('../models/grades');

exports.create = async (req, res) => {
    try {
        const gradesdata = req.body;
        console.log("gradesdata", gradesdata);

        const grades = await Grades.insertMany(gradesdata);
        res.send(grades);



    } catch (err) {
        console.log(err);
        res.status(400).send("Create grades failed");
    }
};