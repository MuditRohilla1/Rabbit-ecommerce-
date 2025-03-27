const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");

// Middleware to protect Route
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.user.id).select("-password");
      if (!req.user) {
        return res.status(401).json({ msg: "User not found" });
      }

      next();
    } catch (error) {
      console.error("Token Verification Failed:", error);
      res.status(401).json({ msg: "Please log in to access this route" });
    }
  } else {
    res.status(401).json({ msg: "Not Authorized, no token provided" });
  }
};

module.exports = { protect };
