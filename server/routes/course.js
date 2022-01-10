const express = require('express');

const router = express.Router();

// middleware

const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create , list , update, remove} = require('../controller/course');

// Routes
router.post("/course", authCheck, adminCheck, create);          // route to create a -course
router.get("/courses", list);                                  // public route to get a list of all -course
router.put("/course/:id", authCheck, adminCheck, update);          // route to update -course
router.delete("/course/:id", authCheck, adminCheck, remove);          // route to delete -course

module.exports = router;