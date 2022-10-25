const express = require("express");
const router = express.Router();
const bookData = require("../controllers/bookController");

router.post("/createBook", bookData.createBook);
router.get("/bookList", bookData.bookList);
router.get("/getBooksInYear", bookData.getBooksInYear);
router.post("/getParticularBooks", bookData.getParticularBooks);
router.get("/getXINRBooks", bookData.getXINRBooks);
router.get("/getRandomBooks", bookData.getRandomBooks);

module.exports = router;
