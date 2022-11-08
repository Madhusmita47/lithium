const jwt = require("jsonwebtoken");


const authenticate = function (req, res, next) {

    try {
        let token = req.headers["x-auth-token"]
        if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

        let decodedToken = jwt.verify(token, "functionup-Lithium");
        if (!decodedToken) return res.status(401).send({ status: false, msg: "token is invalid" });

        req.token = decodedToken

        next()
        
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })

    }

}


const authorise = function (req, res, next) {

    try {
        // let token = req.headers["x-auth-token"];

        // let decodedToken = jwt.verify(token, "madhu");
        // if (!decodedToken) return res.status(400).send({ status: false, msg: "token is invalid" });

        const actUserId = req.token.userId
        const reqUserId = req.params.userId
        // console.log(actUserId)

        if (actUserId !== reqUserId) return res.status(403).send({ status: false, msg: "Bad Login" })

        next()

    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })

    }

}



module.exports.authenticate = authenticate
module.exports.authorise = authorise