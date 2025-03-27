const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require('./routes/user.routes.js');
const productRoutes = require('./routes/product.routes.js')

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

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});