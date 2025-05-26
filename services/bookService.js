/**
 * Add a new book.
 * @param {Object} bookData
 * @returns {Promise<Object>}
 */

/**
 * Get books with optional filters and pagination.
 * @param {Object} params
 * @returns {Promise<Array<Object>>}
 */

/**
 * Get book details by ID, including average rating and reviews.
 * @param {string} bookId
 * @returns {Promise<Object>}
 */

/**
 * Search books by title or author.
 * @param {string} query
 * @returns {Promise<Array<Object>>}
 */

const Book = require("../models/Book")
const Review = require("../models/Review")

// Add New Book into DB
exports.addBookService = async (bookData) => {
  const book = await Book.create(bookData);
  return book;
};

// Get All Books from DB also filters method applicable
exports.getBooksService = async ({ page = 1, limit = 10, author, genre }) => {
  const filter = {};
  if (author) filter.author = new RegExp(author, "i");
  if (genre) filter.genre = genre;

  const books = await Book.find(filter)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  return books;
};


// Get Specific book details by ID
exports.getBookDetailsService = async (bookId) => {
  const book = await Book.findById(bookId);
  const reviews = await Review.find({ book: bookId });
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1);

  return { book, avgRating, reviews };
};

// Get book on Searching ( by author or title)
exports.searchBooksService = async (query) => {
  const books = await Book.find({
    $or: [
      { title: new RegExp(query, "i") },
      { author: new RegExp(query, "i") },
    ],
  });

  return books;
};
