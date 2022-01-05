const express = require('express');

const router = express.Router();

// middleware

const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create , list , update, remove} = require('../controller/class');

// Routes
router.post("/class", authCheck, adminCheck, create);          // route to create a -class
router.get("/classes", list);                                  // public route to get a list of all -classes
router.put("/class/:id", authCheck, adminCheck, update);          // route to update -class
router.delete("/class/:id", authCheck, adminCheck, remove);          // route to delete -class

module.exports = router;