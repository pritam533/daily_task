
// const express = require("express");
// const router = express.Router();
// const Booking = require("../models/Booking");
// const Event = require("../models/Event");

// // BOOK TICKET
// router.post("/", async (req, res) => {
//       const { eventId, name, email, tickets } = req.body;

//       try {
//             const event = await Event.findById(eventId);

//             if (!event) return res.status(404).json({ message: "Event not found" });

//             if (event.availableSeats < tickets) {
//                   return res.status(400).json({ message: "Not enough seats available" });
//             }

//             event.availableSeats -= tickets;
//             await event.save();

//             const booking = new Booking({ eventId, name, email, tickets });
//             await booking.save();

//             res.json({ message: "Booking successful" });
//       } catch (err) {
//             res.status(500).json({ message: err.message });
//       }
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Event = require("../models/Event");


// router.post("/:id", async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.id);

//     if (!event || event.availableSeats <= 0) {
//       return res.status(400).json({ message: "No seats available" });
//     }

//     event.availableSeats -= 1;
//     await event.save();

//     res.json({ message: "Ticket booked successfully 🎟️" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");

/* =====================
   EMAIL CONFIG
===================== */
const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
            user: "pritamv225@gmail.com",
            pass: "qmukfeqkppppbayc"
      }
});

/* =====================
   BOOK TICKET + EMAIL
===================== */
router.post("/:id", async (req, res) => {
      try {
            const { email } = req.body;
            const event = await Event.findById(req.params.id);

            if (!event || event.availableSeats <= 0) {
                  return res.status(400).json({ message: "No seats available" });
            }

            // reduce seat
            event.availableSeats -= 1;
            await event.save();

            // save booking
            await Booking.create({
                  eventId: event._id,
                  userEmail: email
            });

            // send email
            await transporter.sendMail({
                  from: "Event Booking 🎟️ <yourgmail@gmail.com>",
                  to: email,
                  subject: "Your Ticket Confirmation 🎉",
                  html: `
        <h2>${event.title}</h2>
        <p>${event.description}</p>
        <p><b>Date:</b> ${event.date}</p>
        <p><b>Location:</b> ${event.location}</p>
        <p><b>Price:</b> ₹${event.price}</p>
        <p>🎟️ <b>Your ticket is confirmed!</b></p>
      `
            });

            res.json({ message: "Ticket booked & email sent 📧" });

      } catch (error) {
            res.status(500).json({ message: error.message });
      }
});

module.exports = router;
