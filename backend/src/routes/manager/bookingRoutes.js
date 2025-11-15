const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleware/authMiddleware");
const bookingController = require("../controllers/bookingController");

// Booking routes here

module.exports = router;
