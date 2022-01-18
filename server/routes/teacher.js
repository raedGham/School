const express = require('express');

const router = express.Router();

// middleware

const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create , list , update, remove, addOrUpdateCourses,getCourses} = require('../controller/teacher');

// Routes
router.post("/teacher", authCheck, adminCheck, create);          // route to create a teacher 
router.get("/teachers", list);                                  // public route to get a list of all teachers
router.put("/teacher/:id", authCheck, adminCheck, update);          // route to update teacher
router.delete("/teacher/:id", authCheck, adminCheck, remove);          // route to delete teacher
router.post("/teacher/schoolyear/courses", authCheck, adminCheck, addOrUpdateCourses)
router.get("/teacher/:teacherId/schoolyear/:schoolyearId/getcourses", getCourses)
module.exports = router;