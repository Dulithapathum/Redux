import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./Reducer/cartSlice";
import laptopSliceReducer from "./Reducer/laptopSlice";

// Configure and combine reducers for the store
const store = configureStore({
  reducer: {
    cart: cartSliceReducer, // Reducer for cart
    laptop: laptopSliceReducer, // Reducer for laptops
  },
});

export default store;
