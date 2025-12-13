// const express = require("express");
// const Booking = require("../models/Booking");

// const router = express.Router();

// router.post("/book", async (req, res) => {
//       const booking = new Booking(req.body);
//       await booking.save();
//       res.json({ message: "Ticket Booked" });
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Event = require("../models/Event");

// BOOK TICKET
router.post("/", async (req, res) => {
      const { eventId, name, email, tickets } = req.body;

      try {
            const event = await Event.findById(eventId);

            if (!event) return res.status(404).json({ message: "Event not found" });

            if (event.availableSeats < tickets) {
                  return res.status(400).json({ message: "Not enough seats available" });
            }

            event.availableSeats -= tickets;
            await event.save();

            const booking = new Booking({ eventId, name, email, tickets });
            await booking.save();

            res.json({ message: "Booking successful" });
      } catch (err) {
            res.status(500).json({ message: err.message });
      }
});

module.exports = router;
