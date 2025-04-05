const express = require('express');
const Product = require('../models/product.model.js');
const { protect, checkIfUserIsAdmin } = require('../middleware/authMiddleware.js');

const router = express.Router();

// GET /api/admin/products
// Get all products (Admin Only)
router.get('/', protect, checkIfUserIsAdmin, async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error fetching products' });
    }
});

module.exports = router;