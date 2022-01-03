const express = require('express');

const router = express.Router();

// middleware

const { authCheck, adminCheck } = require("../middleware/auth")

// controller
const { createOrUpdateUser, currentUser } = require('../controller/auth');



//route
router.post("/create-or-update-user", authCheck, createOrUpdateUser);

router.post("/current-user", authCheck, currentUser);

router.post("/current-admin", authCheck, adminCheck, currentUser);


module.exports = router;
