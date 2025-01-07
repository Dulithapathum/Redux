import { createSlice, nanoid } from "@reduxjs/toolkit";

// Define the initial state with one laptop entry
const initialState = [
  {
    id: nanoid(), // Unique ID for the initial laptop
    price: "12000", // Default price for the initial laptop
    spec: {
      cpu: "i3", // Default CPU specification
      ram: "8GB", // Default RAM specification
      hdd: "123GB", // Default HDD specification
    },
  },
];

// Create a slice for managing laptop data in Redux
const laptopSlice = createSlice({
  name: "laptop", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Reducer to add a new laptop to the state
    addLaptop: {
      reducer: (state, action) => {
        state.push(action.payload); // Push new laptop data to the state array
      },
      // Function to prepare the action payload
      prepare: (price, cpu, ram, hdd) => {
        return {
          payload: {
            id: nanoid(), // Generate a unique ID for the new laptop
            price, // Set the provided price
            spec: {
              cpu, // Set the provided CPU specification
              ram, // Set the provided RAM specification
              hdd, // Set the provided HDD specification
            },
          },
        };
      },
    },
  },
});

// Selector for accessing laptop slice state from the Redux store
export const laptopSliceSelecter = (store) => store.laptopSlice;

// Export action creators and the reducer
export const { addLaptop } = laptopSlice.actions;
export default laptopSlice.reducer;
