// Import the Redux createStore function
import { createStore } from "redux";
// Import the reducer function, which manages the application's state
import reducer from "./Reducer/Number";

// Create a Redux store with the reducer
const store = createStore(reducer);

// Export the store so it can be used across the application
export default store;
