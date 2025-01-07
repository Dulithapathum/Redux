// Set up the default state for the application
const defaultState = {
  number: 0, // Initialize the number property in the state
};

// Define an object for action types to prevent typos and centralize action type declarations
const numberActionType = {
  INC: "increment", // Action type for increment
  DEC: "decrement", // Action type for decrement
};

// Action creator for incrementing the number
export const numberIncrement = (payload = 0) => {
  return {
    type: numberActionType.INC, // Action type for increment
    payload, // The value to increment by
  };
};

// Action creator for decrementing the number
export const numberDecrement = (payload = 0) => {
  return {
    type: numberActionType.DEC, // Action type for decrement
    payload, // The value to decrement by
  };
};

// Define the reducer function which handles actions and updates the state
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // Handle increment action
    case numberActionType.INC:
      return {
        number: state.number + action.payload, // Increase the number by the action payload
      };

    // Handle decrement action
    case numberActionType.DEC:
      return {
        number: state.number - action.payload, // Decrease the number by the action payload
      };

    // Return the current state for any unknown actions
    default:
      return state;
  }
};

// Export the reducer to be used in the Redux store
export default reducer;
