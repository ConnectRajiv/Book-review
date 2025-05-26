/**
 * Main server file for the Book-Review application.
 * 
 * - Loads environment variables using dotenv.
 * - Initializes Express application.
 * - Applies CORS and JSON body parsing middleware.
 * - Sets up API routes for authentication, books, and reviews.
 * - Connects to MongoDB using Mongoose and starts the server on the specified port.
 * 
 * Environment Variables:
 * @env {string} MONGODB_URI - MongoDB connection string.
 * @env {string|number} PORT - Port number for the server to listen on.
 * 
 * @module server
 */
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));

// DB Connect + Server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.log(err));
