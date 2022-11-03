const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")
const mid = require("../middlewares/validation")




router.post("/createUser", mid.midHeader, mid.midCheckUserData, userController.createUser)
router.get("/getAllUser", userController.getUser)


router.post("/createProduct", productController.createProduct)
router.get("/getProduct", productController.getProductDetails)


router.post("/createOrder", mid.isFreeAppUser, mid.midHeader, mid.midUserId, mid.midProductId, mid.midCheckUserData, orderController.createOrder)
router.get("/getOrder", orderController.getAllOrderData)








module.exports = router;