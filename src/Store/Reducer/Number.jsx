// Set up the default state for the application
const defaultState = {
  number: 0, // Initialize the number property in the state
};

// Define the reducer function which handles actions and updates the state
const reducer = (state = defaultState, action) => {
  // Handle increment action
  if (action.type === "increment") {
    return {
      number: state.number + action.payload, // Increase number by the action's payload
    };
  }

  // Handle decrement action
  if (action.type === "decrement") {
    return {
      number: state.number - action.payload, // Decrease number by the action's payload
    };
  }

  // Return the current state for any unknown actions
  return state;
};

// Export the reducer to be used in the Redux store
export default reducer;
