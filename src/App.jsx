import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks
import { laptopSliceSelecter, addLaptop } from "./Store/Reducers/laptopslice"; // Import selector and actions
import { useRef } from "react"; // Use for creating controlled input fields
import { nanoid } from "@reduxjs/toolkit"; // For generating unique IDs

const App = () => {
  // Get the laptops array from the Redux store
  const laptop = useSelector(laptopSliceSelecter);

  // Function to dispatch actions
  const dispatch = useDispatch();

  // Input field references for capturing user input
  const price = useRef();
  const cpu = useRef();
  const ram = useRef();
  const hdd = useRef();

  // Function to handle the Add Laptop form submission
  const addLaptopSubmit = () => {
    // Dispatch an action to add a new laptop to the Redux store
    dispatch(
      addLaptop(
        price.current.value, // Laptop price
        cpu.current.value, // Laptop CPU specification
        ram.current.value, // Laptop RAM specification
        hdd.current.value // Laptop HDD specification
      )
    );
  };

  return (
    <div>
      {/* Input fields for adding a new laptop */}
      <input type="text" placeholder="Enter Price" ref={price} />
      <input type="text" placeholder="Enter CPU" ref={cpu} />
      <input type="text" placeholder="Enter RAM" ref={ram} />
      <input type="text" placeholder="Enter HDD" ref={hdd} />

      {/* Button to trigger the Add Laptop action */}
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
