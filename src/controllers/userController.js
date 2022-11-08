const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken')


const createUser = async function (abcd, xyz) {
    try {

        let data = abcd.body;
        let savedData = await userModel.create(data);

        xyz.status(201).send({ msg: savedData });

    } catch (error) {
        xyz.status(500).send({ status: false, msg: error.message })
    }

};

const loginUser = async function (req, res) {

    try {

        let userName = req.body.emailId;
        let password = req.body.password;

        let user = await userModel.findOne({ emailId: userName, password: password });
        if (!user) return res.status(400).send({ status: false, msg: "username or the password is not corerct" });

        let token = jwt.sign(
            {
                userId: user._id.toString(),
                batch: "Lithium",
                organisation: "FunctionUp",
            },
            "madhu");

        res.setHeader("x-auth-token", token);
        res.status(200).send({ status: true, data: token });

    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })

    }

};

const getUserData = async function (req, res) {

    try {
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if (!userDetails) return res.status(404).send({ status: false, msg: "No such user exists" });

        res.status(200).send({ status: true, data: userDetails });

    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })

    }

};

const updateUser = async function (req, res) {

    try {
        let userId = req.params.userId;
        let user = await userModel.findById(userId);

        if (!user) return res.status(404).send("No such user exists");

        let userData = req.body;
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId /*, isDeleted: false*/ }, userData, { new: true });
        // if (!updatedUser) return res.send({ status: false, msg: "User data not found or already deleted!" })


        res.status(200).send({ status: updatedUser, data: updatedUser });
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })

    }

};


const deleteuser = async function (req, res) {

    try {
        let userId = req.params.userId

        let deleteUser = await userModel.findOneAndUpdate({ _id: userId /*, isDeleted: false*/ }, { isDeleted: true })
        // if (!deleteUser) return res.send({ status: false, msg: "User data not found or already deleted!" })

        res.status(200).send({ status: true, msg: " Successfully Deleted" })

    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })

    }

}




module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteuser = deleteuser
