const bookModel = require("../models/bookModel");
const authorDetails = require("../models/authorModel");
const publisherDetails = require("../models/publisherModel");


//Create-Data--------------------------->
const createBook = async function (req, res) {
    let book = req.body;

    if (!book.author) { return res.send("AuthorId detail is required") };

    let checkIdOfAuthor = await authorDetails.findById(book.author)
    if (!checkIdOfAuthor) { return res.send("Author is not present.") };

    if (!book.publisher) { return res.send("PublisherId detail is required") };

    let checkIdOfpublisher = await publisherDetails.findById(book.publisher)
    if (!checkIdOfpublisher) { return res.send("Publisher is not present") };

    let bookCreated = await bookModel.create(book);

    res.send({ data: bookCreated });
};


//Get-Data--------------------------->
const getBooksData = async function (req, res) {
    let books = await bookModel.find();
    res.send({ data: books });
};


//Get-Data-With-Author&Publisher-Details--------------------------->
const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(["author", "publisher"])
    res.send(specificBook);

};


//Update-All-Old-Books--------------------------->
// const updateOldBook = async function (req, res) {
    
//     let books = await bookModel.findByIdAndUpdate(
//         { _id: req.body.ID },
//         { $set: { isHardCover: false } },
//         { new: true}
//     )
//     res.send(books)
// }
// module.exports.updateOldBook = updateOldBook


//Update-All-New-Books--------------------------->
const updateNewBook = async function (req, res) {
    let findDataPublisher = await publisherDetails.find({ name: { $in: ["Penguin", "HarperCollins"] } })
    let fetch = findDataPublisher.map(x => x._id)
    let books = await bookModel.updateMany(
        { publisher: fetch },
        { $set: { isHardCover: true } },
        { new: true }
    )
    res.send(books)
}


//Update-Price-Of-Book--------------------------->
const updatePriceOfBook = async function (req, res) {
    let findDataAuthor = await authorDetails.find({ rating: { $gt: 3.5 } })
    let fetch = findDataAuthor.map(x => x._id)
    let books = await bookModel.updateMany(
        { author: fetch },
        { $inc: { price: 10 } },
    )
    res.send(books)
}



module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails
module.exports.updateNewBook = updateNewBook
module.exports.updatePriceOfBook = updatePriceOfBook