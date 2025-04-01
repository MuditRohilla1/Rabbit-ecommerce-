const express = require("express");
const Cart = require("../models/cart.model.js");
const Product = require("../models/product.model.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

// Helper function to get a cart by userId or guest Id
const getCart = async (userId, guestId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guestId });
  }
  return null;
};

// POST /api/cart
router.post("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;

  // Basic validation for quantity
  if (quantity <= 0) {
    return res
      .status(400)
      .json({ message: "Quantity must be greater than zero" });
  }

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not Found" });
    }

    // Determine if user is Logged in
    let cart = await getCart(userId, guestId);

    if (cart) {
      const ProductIndex = cart.products.findIndex(
        (p) =>
          p.productId.toString() === productId &&
          p.size === size &&
          p.color === color
      );

      if (ProductIndex > -1) {
        // if product already exists, update the quantity
        cart.products[ProductIndex].quantity += quantity;
      } else {
        cart.products.push({
          productId,
          name: product.name,
          image: product.images[0].url,
          price: product.price,
          size,
          color,
          quantity,
        });
      }

      //   recalculate the total Price
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await cart.save();
      return res.status(200).json(cart);
    } else {
      // if user is not logged in, create a new cart
      const newCart = await Cart.create({
        user: userId ? userId : undefined,
        guestId: guestId ? guestId : "guest_" + new Date().getTime(),
        products: [
          {
            productId,
            name: product.name,
            image: product.images[0].url,
            price: product.price,
            size,
            color,
            quantity,
          },
        ],
        totalPrice: product.price * quantity,
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding product to cart" });
  }
});

// PUT api/cart
// update product quantity in the cart for a guest or logged in user
router.put("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body; // Fixed 'gueatId' typo

  try {
    let cart = await getCart(userId, guestId);
    if (!cart) {
      return res.status(404).json({ message: "Cart Not Found" }); // Fixed 'req.status' to 'res.status'
    }

    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color
    );

    if (productIndex > -1) {
      if (quantity > 0) {
        cart.products[productIndex].quantity = quantity;
      } else {
        cart.products.splice(productIndex, 1);
      }

      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product Not Found in cart" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" }); // Fixed typo
  }
});

module.exports = router;