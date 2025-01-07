import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart
const initialState = [];

// Create a slice for cart
const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Reducer to add items to the cart
    addToCart: {
      reducer: (state, action) => {
        const id = action.payload.id;

        // Check if the item is already in the cart
        const tempObj = state.find((ele) => ele.id === id);
        console.log(tempObj);

        if (tempObj) {
          // Increment count if item already exists
          tempObj.count += 1;
        } else {
          // Add new item to the cart
          state.push(action.payload);
        }
      },

      // Prepare function to structure the action payload
      prepare: ({ id, price, ram, cpu }) => ({
        payload: {
          id, // Laptop ID
          price, // Laptop Price
          ram, // Laptop RAM
          cpu, // Laptop CPU
          count: 1, // Initial count for the cart item
        },
      }),
    },
  },
});

// Selector to fetch cart state
export const selectCart = (state) => state.cart;

// Export the action creator and reducer
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
