import { useDispatch, useSelector } from "react-redux";
// Import selector and action from the laptop slice
import { laptopSliceSelecter, addLaptop } from "./Store/Reducers/laptopslice";
import { useRef } from "react"; // For handling input fields
import { nanoid } from "@reduxjs/toolkit"; // Generate unique IDs for laptops

const App = () => {
  // Get the laptops array from the Redux store
  const laptop = useSelector(laptopSliceSelecter);

  // Set up the dispatch function
  const dispatch = useDispatch();

  // Create references for input fields
  const price = useRef();
  const cpu = useRef();
  const ram = useRef();
  const hdd = useRef();

  // Handle adding a new laptop to the Redux store
  const addLaptopSubmit = () => {
    dispatch(
      addLaptop({
        id: nanoid(), // Generate a unique ID for the new laptop
        price: price.current.value, // Get price from the input
        spec: {
          cpu: cpu.current.value, // Get CPU from the input
          ram: ram.current.value, // Get RAM from the input
          hdd: hdd.current.value, // Get HDD from the input
        },
      })
    );
  };

  return (
    <div>
      {/* Input fields for adding laptop details */}
      <input type="text" placeholder="Enter Price" ref={price} />
      <input type="text" placeholder="Enter CPU" ref={cpu} />
      <input type="text" placeholder="Enter RAM" ref={ram} />
      <input type="text" placeholder="Enter HDD" ref={hdd} />

      {/* Button to submit new laptop data */}
      <button onClick={addLaptopSubmit}>Add Laptop</button>

      <hr />
      <h1>Laptops</h1>

      {/* Display the list of laptops */}
      {laptop.map((element) => (
        <div key={element.id}>
          <p>
            RS.{element.price} | {element.spec.cpu} | {element.spec.ram} |{" "}
            {element.spec.hdd}
          </p>
        </div>
      ))}
    </div>
  );
};

// Export the component for rendering
export default App;
