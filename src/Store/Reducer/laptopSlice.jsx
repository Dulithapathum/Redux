import { createSlice } from "@reduxjs/toolkit";

// Initial state for the list of laptops
const initialState = [
  { id: 1, price: 12000, cpu: "i3", ram: "8gb" },
  { id: 2, price: 25000, cpu: "i7", ram: "16gb" },
  { id: 3, price: 45000, cpu: "i8", ram: "32gb" },
  { id: 4, price: 50000, cpu: "i5", ram: "64gb" },
];

// Create a slice for laptop
const laptopSlice = createSlice({
  name: "laptop", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Reducer to add a new laptop to the list
    addLaptop: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Selector to fetch laptops state
export const selectLaptop = (state) => state.laptop;

// Export the action creator and reducer
export const { addLaptop } = laptopSlice.actions;
export default laptopSlice.reducer;
