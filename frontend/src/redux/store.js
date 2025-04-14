import { configureStore } from "@reduxjs/toolkit";
import autReducer from "./authSlice";
import productReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import checkoutReducer from "./checkoutSlice";
import orderRedicer from "./orderSlice";
import adminReducer from "./adminSlice";
import adminProductReducer from "./adminProductSlice";
import adminOrderReducer from "./adminOrderSlice";


const store = configureStore({
  reducer: {
    auth: autReducer,
    products: productReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    order: orderRedicer,
    admin: adminReducer,
    adminProduct: adminProductReducer,
    adminOrder: adminOrderReducer,
  },
});

export default store;
