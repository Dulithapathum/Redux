import { createAction, createReducer } from "@reduxjs/toolkit";

// Initial state for the reducer
const initialState = {
  number: 0, // The initial value of the `number` in the store
};

// Action to increment the number
export const increment = createAction(
  "number-increment",
  (name, value, city) => {
    // Return an action object with a payload containing additional information
    return {
      payload: { name, value, city },
    };
  }
);

// Action to decrement the number
export const decrement = createAction(
  "number-decrement",
  (name, value, city) => {
    // Similar to `increment`, include a payload
    return {
      payload: { name, value, city },
    };
  }
);

// Reducer to handle state changes
const numberReducer = createReducer(initialState, (builder) => {
  // Increment case: Add the `value` from the payload to the current state
  builder.addCase(increment, (state, action) => {
    state.number += action.payload.value;
  });

  // Decrement case: Subtract the `value` from the payload from the current state
  builder.addCase(decrement, (state, action) => {
    state.number -= action.payload.value;
  });
});

// Selector function to access the `number` state
export const selectNumber = (store) => store.number;

// Export the reducer for use in the Redux store
export default numberReducer;
