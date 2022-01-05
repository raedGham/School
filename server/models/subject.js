const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;


const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },    
    code : String,    
    subSubjects: [{
        sub    : { type: ObjectId, ref: "subSubject" },
        gradeOn: Number,      
    }],

}, { timestamps: true });



module.exports = mongoose.model('Subject', subjectSchema);