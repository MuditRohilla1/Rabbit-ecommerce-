const express = require("express");
const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");

const router = express.Router();

// route POST /api/users/register
// register a new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    user = new User({ name, email, password });
    await user.save();

    // Create JWT payload
    const payload = { user: { id: user._id, role: user.role } };

    // sign and return token alon with user
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) throw err;
        // Send the user and token in response
        res.status(201).json({
          message: "User created successfully",
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// route POST /api/users/login
// authenticate user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    const payload = { user: { id: user._id, role: user.role } };

    // sign and return token alon with user
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) throw err;
        // Send the user and token in response
        res.status(201).json({
          message: "User Login successfully",
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log("login error", error);
    res.status(500).send({ message: error.message });
  }
});

// GET /api/users/profile
// get Logged-in user's profile (protected Route)
router.get("/profile", protect, async (req, res) => {
    res.json(req.user);
})


module.exports = router;
