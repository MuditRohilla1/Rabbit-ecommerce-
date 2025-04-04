const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require('./routes/user.routes.js');
const productRoutes = require('./routes/product.routes.js')
const cartRoutes = require('./routes/cart.routes.js')
const checkoutRoutes = require('./routes/checkout.routes.js')
const orderRoutes = require('./routes/order.routes.js')
const uploadRoutes = require('./routes/upload.routes.js')
const subscriberRoutes = require('./routes/subscribe.route.js')

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 9000;

connectDB();

app.get("/", (req, res) => {
    res.send("Welcome");
});

// Api Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api", subscriberRoutes);

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});