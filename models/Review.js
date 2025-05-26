/**
 * Mongoose schema for storing book reviews.
 *
 * @typedef {Object} Review
 * @property {mongoose.Types.ObjectId} user - Reference to the User who wrote the review.
 * @property {mongoose.Types.ObjectId} book - Reference to the Book being reviewed.
 * @property {Number} rating - Numerical rating given to the book.
 * @property {String} comment - Textual comment about the book.
 */
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  rating: Number,
  comment: String
});

module.exports = mongoose.model("Review", reviewSchema);
