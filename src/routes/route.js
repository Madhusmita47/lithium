const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");
const bookController = require("../controllers/bookController");
const publisherController = require("../controllers/publisherController");



//Author-Apis--------------------------->
router.post("/createAuthor", authorController.createAuthor);
router.get("/getAuthorsData", authorController.getAuthorsData);



//Book-Apis--------------------------->
router.post("/createBook", bookController.createBook);
router.get("/getBooksData", bookController.getBooksData);
router.get(
  "/getBooksWithAuthorAndPublisherDetails",
  bookController.getBooksWithAuthorAndPublisherDetails
);



// Publisher-Apis--------------------------->
router.post("/createPublisher", publisherController.createPublisher);
router.get("/getPublishersData", publisherController.getPublishersData);
//Update-All-New-Books--------------------------->
router.put("/updateNewBook", bookController.updateNewBook);
//Update-Price-Of-Book--------------------------->
router.put("/updatePriceOfBook", bookController.updatePriceOfBook);

//Update-All-Old-Books--------------------------->
// router.put("/updateOldBook", bookController.updateOldBook);



module.exports = router;
