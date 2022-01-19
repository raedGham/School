const express = require('express');

const router = express.Router();

// middleware

const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create , list , update, remove, getStudents, addOrUpdateStudents} = require('../controller/section');

// Routes
router.post("/section", authCheck, adminCheck, create);          // route to create a -section
router.get("/sections", list);                                  // public route to get a list of all -section
router.put("/section/:id", authCheck, adminCheck, update);          // route to update -section
router.delete("/section/:id", authCheck, adminCheck, remove);          // route to delete -section

router.post("/section/schoolyear/students", authCheck, adminCheck, addOrUpdateStudents)
router.get("/section/:sectionId/schoolyear/:schoolyearId/getstudents", getStudents)

module.exports = router;