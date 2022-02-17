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


exports.sectionGrades = async (req, res) => {
    try {
        const {courseId, schoolYearId, sectionId} = req.params;
    //  console.log(courseId);
      console.log(schoolYearId);
    //  console.log(sectionId);
        const sectionGrades = await Grades.find({course:courseId, schoolYear: schoolYearId, section:sectionId}).exec();
        res.json(sectionGrades);
    } catch (err) {
        res.status(400).send("Section Grades Retrieval failed");
    }
};
