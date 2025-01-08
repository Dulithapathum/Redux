import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  selectNumber,
} from "./Store/Reducer/numberReducer";

const App = () => {
  // Get the current state (number value) from the Redux store
  const user = useSelector(selectNumber);

  // Use the dispatch function to trigger Redux actions
  const dispatch = useDispatch();

  return (
    <div>
      {/* Display the current number */}
      {user.number}
      <hr />
      {/* Button to trigger the increment action */}
      <button onClick={() => dispatch(increment("dulitha", 1, "mathara"))}>
        Increment
      </button>
      {/* Button to trigger the decrement action */}
      <button onClick={() => dispatch(decrement("dulitha", 1, "mathara"))}>
        Decrement
      </button>
    </div>
  );
};

export default App;
