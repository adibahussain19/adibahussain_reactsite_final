const mongoose = require("mongoose");

const writingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    summary: {
        type: String, 
        required: true,
    }, 

    fileLink: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Writing", writingSchema);