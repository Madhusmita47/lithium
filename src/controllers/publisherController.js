const publisherModel = require("../models/publisherModel");


//Create-Data--------------------------->
const createPublisher = async function (req, res) {
  let publisher = req.body;
  let authorCreated = await publisherModel.create(publisher);
  res.send({ data: authorCreated });
};


//Get-Data--------------------------->
const getPublishersData = async function (req, res) {
  let publisher = await publisherModel.find();
  res.send({ data: publisher });
};



module.exports.createPublisher = createPublisher;
module.exports.getPublishersData = getPublishersData;
