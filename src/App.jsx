import { produce } from "immer"; // Import `produce` for managing immutable updates
import { useState } from "react"; // Import `useState` for state management in React

// Initial object with nested properties
let obj = {
  name: "Dulitha",
  age: 23,
  address: {
    add1: "saliyapura",
    add2: "anuradhapura",
  },
};

// Initial array
let arry = [1, 2, 3, 4, 5, 6];

// Create an immutable copy of the object using `immer`
const objCopy = produce(obj, (copy) => {
  copy.address.add1 = "katupuliyankulama"; // Update `add1` property in the copied object
});

// Create an immutable copy of the array using `immer`
const arryCopy = produce(arry, (copy) => {
  copy[2] = { name: "Dulitha" }; // Replace the third element (index 2) with a new object
});

const App = () => {
  // Manage state using `useState`, initializing `test` as a shallow copy of `obj`
  const [test, setTest] = useState({ ...obj });

  // Event handler for updating state immutably
  const handleClick = () => {
    setTest(
      produce((copy) => {
        copy.address.add2 = "parasangaswewa"; // Update `add2` property in the copied state
      })
    );
  };

  // Console logs to observe how values change
  console.log("obj", obj); // Logs the original object
  console.log("objCopy", objCopy); // Logs the immutably updated copy of the object
  console.log(".......................................................");

  console.log("arry", arry); // Logs the original array
  console.log("arryCopy", arryCopy); // Logs the immutably updated copy of the array
  console.log(".......................................................");

  console.log("test", test); // Logs the current state managed by React

  return (
    <div>
      {/* Button to trigger the state update */}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App; // Export the component for rendering
