const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber.model.js");

// POST /api/subscribe
router.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  try {
    // check if email is already sunscribed
    const subscriber = await Subscriber.findOne({ email });
    if (subscriber) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }
    // create new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res
      .status(201)
      .json({ message: "Successfully subscribed to the newsletter" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to subscribe to the newsletter" });
  }
});

module.exports = router;