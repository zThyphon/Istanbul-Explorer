const express = require("express");

const pageController = require("../controllers/pageController");

const router = express.Router();
router.get("/",pageController.renderHomePage);
router.get("/gallery",pageController.renderGallery);
module.exports = router;