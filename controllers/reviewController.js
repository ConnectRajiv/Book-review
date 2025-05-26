/**
 * Controller for handling review-related operations.
 * 
 * @module controllers/reviewController
 */

 /**
  * Adds a new review for a book.
  *
  * @async
  * @function addReview
  */

 /**
  * Updates an existing review for a book.
  *
  * @async
  * @function updateReview
  */

 /**
  * Deletes an existing review for a book.
  *
  * @async
  * @function deleteReview
  */

const {
  addReviewService,
  updateReviewService,
  deleteReviewService,
} = require("../services/reviewService");


// handle to Add new Review
exports.addReview = async (req, res) => {
  try {
    const review = await addReviewService(req.params.id, req.user.id, req.body);
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// handling updating existing review
exports.updateReview = async (req, res) => {
  try {
    const review = await updateReviewService(req.params.id, req.user.id, req.body);
    res.json(review);
  } catch (err) {
    const status = err.message === "Not allowed" ? 403 : 400;
    res.status(status).json({ message: err.message });
  }
};

// handling delete existing review
exports.deleteReview = async (req, res) => {
  try {
    const result = await deleteReviewService(req.params.id, req.user.id);
    res.json(result);
  } catch (err) {
    const status = err.message === "Not allowed" ? 403 : 400;
    res.status(status).json({ message: err.message });
  }
};
