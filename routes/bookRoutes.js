/**
 * Express router for book-related routes.
 * 
 * Routes:
 *  - POST /         : Add a new book (requires authentication)
 *  - GET /          : Retrieve a list of all books
 *  - GET /search    : Search for books based on query parameters
 *  - GET /:id       : Retrieve details of a specific book by ID
 * 
 * Middleware:
 *  - auth           : Protects the addBook route to ensure only authenticated users can add books
 * 
 * Controller Methods:
 *  - addBook        : Handles adding a new book
 *  - getBooks       : Handles retrieving all books
 *  - getBookDetails : Handles retrieving details for a specific book
 *  - searchBooks    : Handles searching for books
 * 
 * @module routes/bookRoutes
 */
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  // adding all method from 
  addBook,
  getBooks,
  getBookDetails,
  searchBooks
} = require("../controllers/bookController");

router.post("/", auth, addBook);
router.get("/", getBooks);
router.get("/search", searchBooks);
router.get("/:id", getBookDetails);

module.exports = router;
