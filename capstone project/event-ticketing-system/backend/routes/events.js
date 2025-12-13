const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// GET all events
router.get("/", async (req, res) => {
      try {
            const events = await Event.find();
            res.json(events);
      } catch (err) {
            res.status(500).json({ message: err.message });
      }
});

//  CREATE new event (Admin)
router.post("/", async (req, res) => {
      try {
            const event = new Event({
                  title: req.body.title,
                  description: req.body.description,
                  date: req.body.date,
                  location: req.body.location,
                  price: req.body.price,
                  totalSeats: req.body.totalSeats,
                  availableSeats: req.body.totalSeats,
            });

            const savedEvent = await event.save();
            res.status(201).json(savedEvent);
      } catch (err) {
            res.status(400).json({ message: err.message });
      }
});

module.exports = router;
