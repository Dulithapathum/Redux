import { configureStore } from "@reduxjs/toolkit";
// Import reducers from slices
import numberSliceReducer from "./Reducers/numberSlice";
import laptopSliceReducer from "./Reducers/laptopslice";

const store = configureStore({
  reducer: {
    // Register reducers with the store
    numberSlice: numberSliceReducer,
    laptopSlice: laptopSliceReducer,
  },
});

export default store;
