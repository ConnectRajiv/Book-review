/**
 * Review Routes
 * 
 * This module defines routes for adding, updating, and deleting book reviews.
 * All routes require authentication middleware.
 * 
 * Routes:
 *  POST   /books/:id/reviews   - Add a review for a specific book
 *  PUT    /:id                - Update a review by its ID
 *  DELETE /:id                - Delete a review by its ID
 * 
 * Middleware:
 *  - auth: Ensures the user is authenticated before accessing the routes.
 * 
 * Controller Methods:
 *  - addReview: Handles adding a new review.
 *  - updateReview: Handles updating an existing review.
 *  - deleteReview: Handles deleting a review.
 */
const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

// importing from its controller
const {
  addReview,
  updateReview,
  deleteReview
} = require("../controllers/reviewController");

// endpoint for add review
router.post("/books/:id/reviews", auth, addReview);

// endpoint for update their review 
router.put("/:id", auth, updateReview);

// end-point for 
router.delete("/:id", auth, deleteReview);

module.exports = router;
