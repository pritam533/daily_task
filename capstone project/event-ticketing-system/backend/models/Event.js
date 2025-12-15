const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
      title: String,
      description: String,
      date: String,
      location: String,
      price: Number,
      totalSeats: Number,
      availableSeats: Number,
      image: String
});

module.exports = mongoose.model("Event", eventSchema);
