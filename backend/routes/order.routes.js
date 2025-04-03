const express = require('express')
const Order = require('../models/order.model.js')
const { protect } = require('../middleware/authMiddleware.js')

const router = express.Router();

// GET /api/orders/my-orders
router.get('/my-orders', protect, async (req, res) => {
    try {
        // Find orders for authenticated users
        const orders = await Order.find({ user: req.user._id }).sort({
            createdAt: -1,
        });
        res.json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" })
    }
});

// GET /api/orders/:id
router.get('/:id', protect, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate(
            "user",
            "name email"
        );
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.json(order);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" })
    }
});

module.exports = router;