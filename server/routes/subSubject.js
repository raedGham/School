const express = require('express');

const router = express.Router();

// middleware

const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create , list , update, remove} = require('../controller/subSubject');

// Routes
router.post("/subsubject", authCheck, adminCheck, create);          // route to create a sub-subject
router.get("/subsubjects", list);                                  // public route to get a list of all sub-subject
router.put("/subsubject/:id", authCheck, adminCheck, update);          // route to update sub-subject
router.delete("/subsubject/:id", authCheck, adminCheck, remove);          // route to delete sub-subject
module.exports = router;