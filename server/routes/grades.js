const express = require('express');

const router = express.Router();

// middleware

const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create , sectionGrades} = require('../controller/grades');

// Routes
router.post("/grades", authCheck, create);          // route to create a grade
router.get("/getgrades/:courseId/:schoolYearId/:sectionId", authCheck, sectionGrades);                                  // public route to get a list of section grades
// router.put("/class/:id", authCheck, adminCheck, update);          // route to update -class
// router.delete("/class/:id", authCheck, adminCheck, remove);          // route to delete -class

module.exports = router;