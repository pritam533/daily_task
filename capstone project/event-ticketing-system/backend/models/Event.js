const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
      title: String,
      description: String,
      date: String,
      location: String,
      price: Number,
      totalSeats: Number,
      availableSeats: Number,
});

module.exports = mongoose.model("Event", eventSchema);
