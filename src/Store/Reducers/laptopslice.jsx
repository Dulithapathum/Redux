import { createSlice, nanoid } from "@reduxjs/toolkit";

// Define the initial state with one laptop entry
const initialState = [
  {
    id: nanoid(),
    price: "12000", // Default price
    spec: {
      cpu: "i3", // Default CPU
      ram: "8GB", // Default RAM
      hdd: "123GB", // Default HDD
    },
  },
];

// Create a slice for laptops
const laptopSlice = createSlice({
  name: "laptop", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Add a new laptop to the state
    addLaptop: (state, action) => {
      state.push(action.payload); // Append the new laptop to the array
    },
  },
});

// Selector for accessing the laptop slice state
export const laptopSliceSelecter = (store) => store.laptopSlice;

// Export action creators and the reducer
export const { addLaptop } = laptopSlice.actions;
export default laptopSlice.reducer;
