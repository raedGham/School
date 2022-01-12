const User = require('../models/user');


exports.create = async (req, res) => {
    try {
        const subdata = req.body;
        console.log("Classdata===>", req.body);
        const user = await new User(req.body).save();
        //       console.log(classs);
        res.json(user);
    } catch (err) {
        //               console.log(err);
        res.status(400).send("Create user failed");
    }
};


exports.list = async (req, res) => {
    try {
        const userList = await User.find({}).sort({ name: -1 }).exec();
        res.json(userList);
    } catch (err) {
        res.status(400).send("User List failed");
    }
};


exports.update = async (req, res) => {
    try {
        // const id =  req.body._id;
        // console.log(id);
        // console.log(req.params.id);
        let updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
        res.json(updated);
    } catch (err) {
        res.status(400).send("User update failed");
    }
};


exports.remove = async (req, res) => {
    try {
        const deleted = await User.findByIdAndDelete(req.params.id).exec();
        res.json(deleted);
    } catch (err) {
        res.status(400).send("class delete failed");
    }
};
