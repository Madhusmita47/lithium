const jwt = require("jsonwebtoken");


const authenticate = function (req, res, next) {

    let token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "functionup-Lithium");
    if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });

   
    next()
}


const authorise = function (req, res, next) {

    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "functionup-Lithium");
    if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });

    console.log(decodedToken)

    let userId = req.params.userId;
    
    if (userId != decodedToken.userId) return res.send("Can't login with is this user. You have to modify the request user details.")

    next()
}



module.exports.authenticate = authenticate
module.exports.authorise = authorise