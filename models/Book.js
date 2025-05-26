/**
 * Mongoose schema for the Book model.
 *
 * Represents a book with a title, author, and genre.
 *
 * @typedef {Object} Book
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 * @property {string} genre - The genre of the book.
 */
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
});

module.exports = mongoose.model("Book", bookSchema);
