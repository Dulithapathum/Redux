// Import Redux hooks to interact with the store
import { useDispatch, useSelector } from "react-redux";

function App() {
  // Access the current state value from the Redux store using useSelector
  const number = useSelector((store) => store.number);

  // Get the dispatch function to send actions to the store
  const dispatch = useDispatch();

  return (
    <>
      {/* Display the current number from the state */}
      <h1>{number}</h1>

      {/* Increment button */}
      <button
        onClick={() => {
          // Dispatch an increment action with a payload of 1
          dispatch({
            type: "increment",
            payload: 1,
          });
        }}
      >
        Increment
      </button>

      {/* Decrement button */}
      <button
        onClick={() => {
          // Dispatch a decrement action with a payload of 1
          dispatch({
            type: "decrement",
            payload: 1,
          });
        }}
      >
        Decrement
      </button>
    </>
  );
}

// Export the component for rendering
export default App;
