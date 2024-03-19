const express = require("express");

const eventController = require("../controllers/eventController");

const router = express.Router();
router.get("/",eventController.renderEventsPage);
router.get("/:eventId",eventController.renderEventDetailPage);
router.get("/register/:eventId",eventController.renderEventRegisterPage);
router.post("/register",eventController.postEventRegistration);

module.exports = router;