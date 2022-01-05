const express = require('express');

const router = express.Router();

// middleware

const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create , list , update, remove,pageList,studentsCount} = require('../controller/student');

// Routes
router.post("/student", authCheck, adminCheck, create);          // route to create a student 
router.get("/students", list);                                  // public route to get a list of all students
router.put("/student/:id", authCheck, adminCheck, update);          // route to update student
router.delete("/student/:id", authCheck, adminCheck, remove);          // route to delete student
router.get('/students/total', authCheck, studentsCount);                             // used to return number of students
router.post('/students',authCheck, pageList);                                          // used for home pagination of students
module.exports = router;