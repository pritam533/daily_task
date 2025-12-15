// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema({
//       userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//       eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
//       tickets: Number
// });

// module.exports = mongoose.model("Booking", bookingSchema);


const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
      eventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Event"
      },
      userEmail: String,
      bookedAt: {
            type: Date,
            default: Date.now
      }
});

module.exports = mongoose.model("Booking", bookingSchema);
