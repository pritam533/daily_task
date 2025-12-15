// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const router = express.Router();

// router.post("/register", async (req, res) => {
//       const { name, email, password } = req.body;
//       const hashedPassword = await bcrypt.hash(password, 10);

//       const user = new User({ name, email, password: hashedPassword });
//       await user.save();

//       res.json({ message: "User Registered" });
// });

// router.post("/login", async (req, res) => {
//       const { email, password } = req.body;
//       const user = await User.findOne({ email });

//       if (!user) return res.status(400).json({ message: "User not found" });

//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) return res.status(400).json({ message: "Wrong password" });

//       const token = jwt.sign({ id: user._id }, "secretkey");
//       res.json({ token });
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "secret123"; // later move to .env

/* =====================
   REGISTER
===================== */
router.post("/register", async (req, res) => {
      try {
            const { name, email, password } = req.body;

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({
                  name,
                  email,
                  password: hashedPassword
            });

            res.json({ message: "User registered successfully" });
      } catch (err) {
            res.status(400).json({ message: "User already exists" });
      }
});

/* =====================
   LOGIN
===================== */
router.post("/login", async (req, res) => {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "User not found" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

      const token = jwt.sign(
            { id: user._id, role: user.role },
            JWT_SECRET,
            { expiresIn: "1d" }
      );

      res.json({
            token,
            role: user.role,
            name: user.name
      });
});

module.exports = router;
