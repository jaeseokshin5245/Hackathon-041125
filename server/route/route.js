"use strict"

// module
const express = require("express");
const router = express.Router();
const ctrl = require("./login.route");

// Home Page
router.get("/", ctrl.home.init);

// login
router.post("/login", ctrl.process.login);

//sign up
router.post("/resetps", ctrl.process.resetps);

module.exports = router;