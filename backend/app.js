const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const writingRoutes = require("./routes/writingRoutes.js");
const projectRoutes = require("./routes/projectRoutes.js");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Construct MongoDB URI
const MONGO_URI = process.env.MONGO_URI.replace('${DB_PASSWORD}', encodeURIComponent(process.env.DB_PASSWORD));

// MongoDB connection
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Listen for MongoDB connection events
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB.');
});

mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB.');
});


// Sample route
app.get("/", (req, res) => {
    res.send("API is working!");
});

// Routes
app.use("/writing", writingRoutes);
app.use("/projects", projectRoutes);

// Error handling middleware
app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong.';
    res.status(status).json({ message: message });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});