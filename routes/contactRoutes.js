const express = require("express");

const contactController = require("../controllers/contactController");

const router = express.Router();
router.get("/",contactController.renderContactPage);
router.post("/",contactController.postContact);

module.exports = router;