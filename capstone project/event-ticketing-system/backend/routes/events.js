const express = require("express");
const router = express.Router();
const multer = require("multer");
const Event = require("../models/Event");

/* =======================
   MULTER CONFIGURATION
======================= */
const storage = multer.diskStorage({
      destination: (req, file, cb) => {
            cb(null, "uploads/");
      },
      filename: (req, file, cb) => {
            cb(null, Date.now() + "-" + file.originalname);
      }
});

const upload = multer({ storage });

/* =======================
   CREATE EVENT (ADMIN)
======================= */
router.post("/", upload.single("image"), async (req, res) => {
      try {
            const newEvent = new Event({
                  title: req.body.title,
                  description: req.body.description,
                  date: req.body.date,
                  location: req.body.location,
                  price: req.body.price,
                  totalSeats: req.body.totalSeats,
                  availableSeats: req.body.totalSeats,
                  image: req.file ? req.file.filename : null
            });

            await newEvent.save();
            res.status(201).json(newEvent);
      } catch (error) {
            res.status(500).json({ message: error.message });
      }
});

/* =======================
   GET ALL EVENTS (HOME)
======================= */
router.get("/", async (req, res) => {
      try {
            const events = await Event.find();
            res.json(events);
      } catch (error) {
            res.status(500).json({ message: error.message });
      }
});
// DELETE EVENT
router.delete("/:id", async (req, res) => {
      try {
            await Event.findByIdAndDelete(req.params.id);
            res.json({ message: "Event deleted successfully " });
      } catch (error) {
            res.status(500).json({ message: error.message });
      }
});


module.exports = router;
