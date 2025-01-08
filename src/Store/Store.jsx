import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./Reducer/numberReducer";

// Create and configure the Redux store
const store = configureStore({
  reducer: {
    number: numberReducer,
  },
});

export default store;
