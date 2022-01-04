const express = require('express');

const router = express.Router();

// middleware

const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create , list , update, remove} = require('../controller/student');

// Routes
router.post("/student", authCheck, adminCheck, create);          // route to create a student 
router.get("/students", list);                                  // public route to get a list of all students
router.put("/student/:id", authCheck, adminCheck, update);          // route to update student
router.delete("/student/:id", authCheck, adminCheck, remove);          // route to delete student

module.exports = router;