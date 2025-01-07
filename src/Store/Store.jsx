// Import configureStore from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Import the reducer for the number slice
import numberSliceReducer from "./Reducers/numberSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    numberSlice: numberSliceReducer, // Register the slice reducer
  },
});

// Export the store
export default store;
