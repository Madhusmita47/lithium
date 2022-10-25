const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    price: { indianRupees: String, europeanPrice: String },
    year: { type: Number, default: 2021 },
    tag: [String],
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean,
  },

  { timestamps: true }
);

module.exports = mongoose.model("Newbook", bookSchema);