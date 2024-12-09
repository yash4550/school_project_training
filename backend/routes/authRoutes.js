const express = require("express");
const { registerUser, loginUser, resetPassword } = require("../controllers/authController");

const router = express.Router();

// User Registration
router.post("/register", registerUser);

// User Login
router.post("/login", loginUser);

// Password Reset
router.post("/forgot-password", resetPassword);

module.exports = router;
