import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/products/ProductDetails";
import CheckOut from "./components/cart/CheckOut";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrders from "./pages/MyOrders";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/collections/:collection" element={<CollectionPage />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="order-confirmation" element={<OrderConfirmation/>}/>
          <Route path="order/:id" element={<OrderDetailsPage/>}/>
          <Route path="/my-orders" element={<MyOrders/>}/>
        </Route>
        {/* <Route path="/admin" element={<UserLayout />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
