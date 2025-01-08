import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "./Reducer/postSlice";

// Create and configure the Redux store
const store = configureStore({
  reducer: {
    post: postSliceReducer, // Connect the post reducer to the store
  },
});

export default store;
