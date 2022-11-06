const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken')


const createUser = async function (abcd, xyz) {

  let data = abcd.body;
  let savedData = await userModel.create(data);

  xyz.send({ msg: savedData });
};

const loginUser = async function (req, res) {

  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user) return res.send({ status: false, msg: "username or the password is not corerct" });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Lithium",
      organisation: "FunctionUp",
    },
    "functionup-Lithium");
 
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) return res.send("No such user exists");

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId /*, isDeleted: false*/ }, userData, { new: true });
  // if (!updatedUser) return res.send({ status: false, msg: "User data not found or already deleted!" })


  res.send({ status: updatedUser, data: updatedUser });
};


const deleteuser = async function (req, res) {

  let userId = req.params.userId
  let deleteUser = await userModel.findOneAndUpdate({ _id: userId /*, isDeleted: false*/ }, { isDeleted: true })
  // if (!deleteUser) return res.send({ status: false, msg: "User data not found or already deleted!" })

  res.send({ status: true, msg: " Successfully Deleted" })

}







module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteuser = deleteuser
