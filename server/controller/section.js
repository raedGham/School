const Section = require('../models/section');
const YrStudentsSections = require('../models/YrStudentsSections');

exports.create = async (req, res) => {
    try {
        const  secdata  = req.body;
     //   console.log("subdata", subdata);
        const section = await new Section(secdata).save();
        res.json(section);
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

exports.getStudents= async (req, res) => {
    try {
        const {sectionId, schoolyearId} = req.params;
     
        const SectionStudents = await YrStudentsSections.findOne({schoolyear:schoolyearId, section:sectionId})
                   .populate({path: 'students', options: { sort: { 'name': -1 } } })                   
                   .exec();
        res.json(SectionStudents);
    } catch (err) {
        res.status(400).send("Section Students failed");
    }
};

exports.addOrUpdateStudents = async (req, res) => {
   
    const  yrstudentssections  = req.body;
    console.log("controller yrstudentssections: ",yrstudentssections);
    const result = await YrStudentsSections.findOneAndUpdate({ schoolyear: yrstudentssections.schoolyear , section:yrstudentssections.section}, yrstudentssections, { new: true });

    if (result) {
        res.json(result)
    } else {
        const newTr = await new YrStudentsSections(yrstudentssections).save();
        console.log("Yr Courses added", newTr);
        res.json(newTr);
    }

}

