const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId",commonMW.authenticate,  userController.getUserData)

router.put("/users/:userId",commonMW.authenticate,userController.updateUser)





module.exports = router;