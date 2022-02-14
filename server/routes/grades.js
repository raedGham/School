const express = require('express');

const router = express.Router();

// middleware

const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create } = require('../controller/grades');

// Routes
router.post("/grades", authCheck, create);          // route to create a grade
// router.get("/classes", list);                                  // public route to get a list of all -classes
// router.put("/class/:id", authCheck, adminCheck, update);          // route to update -class
// router.delete("/class/:id", authCheck, adminCheck, remove);          // route to delete -class

module.exports = router;