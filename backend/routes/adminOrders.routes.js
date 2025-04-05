const express = require("express");
const Order = require("../models/order.model.js");
const {
  protect,
  checkIfUserIsAdmin,
} = require("../middleware/authMiddleware.js");

const router = express.Router();

// GET /api/admin/orders
// GET all orders
router.get("/", protect, checkIfUserIsAdmin, async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get orders" });
  }
});

// PUT /api/admin/orders/:id
// Update order status
router.put("/:id", protect, checkIfUserIsAdmin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.status = req.body.status || order.status;
      order.isDelivered =
        req.body.status === "delivered" ? true : order.isDelivered;
      order.deliveredAt =
        req.body.status === "delivered" ? Date.now() : order.deliveredAt;

      const updateOrder = await order.save();
      res.status(200).json(updateOrder);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update order status" });
  }
});


// DELETE /api/admin/orders/:id
// Delete order
router.delete("/:id", protect, checkIfUserIsAdmin, async (req, res) =>{
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            await order.deleteOne();
            res.status(200).json({ message: "Order deleted successfully" });
        } else {
            res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to delete order" });
    }
})

module.exports = router;
