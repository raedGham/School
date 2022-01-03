const express = require('express');

const router = express.Router();

// middleware

//const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create , list } = require('../controller/teacher');

// Routes
router.post("/teacher", create);          // route to create a category
router.get("/teachers", list);                                  // public route to get a list of all categoriesteacher


module.exports = router;