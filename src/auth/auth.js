const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authAndValid= function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

  
    if (!token) return res.send({ status: false, msg: "token must be present" });


    let decodedToken = jwt.verify(token, "madhu");  // 
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });
    next()
}
module.exports.authAndValid=authAndValid