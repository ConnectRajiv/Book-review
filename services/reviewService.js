/**
 * Adds a new review for a book by a user.
 * Throws an error if the user has already reviewed the book.
 *
 * @async
 * @function addReviewService
 * @param {string} bookId - The ID of the book to review.
 * @param {string} userId - The ID of the user adding the review.
 * @param {Object} reviewData - The review data to be saved.
 * @returns {Promise<Object>} The created review document.
 * @throws {Error} If the review already exists.
 */

/**
 * Updates an existing review.
 * Throws an error if the review is not found or the user is not allowed to update it.
 *
 * @async
 * @function updateReviewService
 * @param {string} reviewId - The ID of the review to update.
 * @param {string} userId - The ID of the user attempting the update.
 * @param {Object} updateData - The data to update the review with.
 * @returns {Promise<Object>} The updated review document.
 * @throws {Error} If the review is not found or the user is not allowed.
 */

/**
 * Deletes an existing review.
 * Throws an error if the review is not found or the user is not allowed to delete it.
 *
 * @async
 * @function deleteReviewService
 * @param {string} reviewId - The ID of the review to delete.
 * @param {string} userId - The ID of the user attempting the deletion.
 * @returns {Promise<Object>} An object with a message indicating deletion.
 * @throws {Error} If the review is not found or the user is not allowed.
 */

const Review = require("../models/Review");

// add new review
exports.addReviewService = async (bookId, userId, reviewData) => {
  const exists = await Review.findOne({ book: bookId, user: userId });  // checking review exist for book and with same user
  if (exists) throw new Error("Review already exists");

  const review = await Review.create({ ...reviewData, user: userId, book: bookId });
  return review;
};

// update review
exports.updateReviewService = async (reviewId, userId, updateData) => {
  const review = await Review.findById(reviewId);
  if (!review) throw new Error("Review not found");
  if (review.user.toString() !== userId) throw new Error("Not allowed");

  Object.assign(review, updateData);
  await review.save();
  return review;
};

// delete review
exports.deleteReviewService = async (reviewId, userId) => {
  const review = await Review.findById(reviewId);
  if (!review) throw new Error("Review not found");
  if (review.user.toString() !== userId) throw new Error("Not allowed");

  await review.remove();
  return { message: "Deleted" };
};
