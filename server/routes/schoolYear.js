const express = require('express');

const router = express.Router();

// middleware

const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create, list, update, remove, getyear } = require('../controller/schoolYear');

// Routes
router.post("/year", authCheck, adminCheck, create);          // route to create a -year
router.get("/years", list);                                  // public route to get a list of all -schoolyears
router.post("/yearsetting/:id", getyear);          // route to get -year
router.put("/year/:id", authCheck, adminCheck, update);          // route to update -year
router.delete("/year/:id", authCheck, adminCheck, remove);          // route to delete -year

module.exports = router;