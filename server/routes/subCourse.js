const express = require('express');

const router = express.Router();

// middleware

const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create , list , update, remove} = require('../controller/subCourse');

// Routes
router.post("/subcourse", authCheck, adminCheck, create);          // route to create a sub-course
router.get("/subcourses", list);                                  // public route to get a list of all sub-course
router.put("/subcourse/:id", authCheck, adminCheck, update);          // route to update sub-course
router.delete("/subcourse/:id", authCheck, adminCheck, remove);          // route to delete sub-course
module.exports = router;