const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const wheatherController=require("../controllers/wheatherController")
const memeController= require("../controllers/MemeController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
//----------------------------------------------------
router.get("/cowin/getbyDistrictsId",CowinController.getbyDistrictsId)
router.get("/getCitiesByTemp",wheatherController.getCitiesByTemp)
router.post("/getMeme",memeController.getMeme)
//---------------------------
router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;