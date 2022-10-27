const express = require("express");
const router = express.Router();

// =================Assignment========================
const bookingData = require("../controllers/controller");
router.post("/createBookData", bookingData.createBooksData);
router.post("/createAuthorData", bookingData.createAuthorsData);
router.get("/getAllData", bookingData.getAllData);
router.get("/getResult", bookingData.getResult);
router.get("/findBook", bookingData.findBook);

// ========================================================

module.exports = router;
