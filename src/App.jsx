import React from "react";
// Import Redux hooks for state access and dispatching actions
import { useDispatch, useSelector } from "react-redux";
// Import the action creators (increment, decrement)
import { decrement, increment } from "./Store/Reducers/numberSlice";

const App = () => {
  // Access the state from the store using useSelector
  const number = useSelector((store) => store.numberSlice);

  // Use useDispatch to dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      {/* Display the current number and first category */}
      <h1>{number.number}</h1>
      <p>{number.category[0]}</p>

      {/* Increment button */}
      <button onClick={() => dispatch(increment(1))}>Increment</button>

      {/* Decrement button */}
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  );
};

// Export the component for rendering
export default App;
