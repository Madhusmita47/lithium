const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const MW= require("../auth/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",MW.authAndValid, userController.getUserData)

router.put("/users/:userId",MW.authAndValid, userController.updateUser)

router.delete("/users/:userId",MW.authAndValid, userController.deleteUser)

module.exports = router;