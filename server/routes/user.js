const express = require('express');

const router = express.Router();

// middleware

const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create, list, update, remove, resetPass } = require('../controller/user');


// Routes
router.post("/user", authCheck, adminCheck, create);          // route to create a -class
router.get("/users", list);                                  // public route to get a list of all -classes
router.put("/user/:id", authCheck, adminCheck, update);          // route to update -class
router.delete("/user/:id", authCheck, adminCheck, remove);          // route to delete -class
router.post("/user/resetpass", resetPass);

module.exports = router;