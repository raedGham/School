const express = require('express');

const router = express.Router();

// middleware

const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create , list , update, remove} = require('../controller/subject');

// Routes
router.post("/subject", authCheck, adminCheck, create);          // route to create a -subject
router.get("/subjects", list);                                  // public route to get a list of all -subject
router.put("/subject/:id", authCheck, adminCheck, update);          // route to update -subject
router.delete("/subject/:id", authCheck, adminCheck, remove);          // route to delete -subject

module.exports = router;