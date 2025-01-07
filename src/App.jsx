import { useDispatch, useSelector } from "react-redux";
import { selectLaptop } from "./Store/Reducer/laptopSlice";
import { selectCart, addToCart } from "./Store/Reducer/cartSlice";

const App = () => {
  // Retrieve the list of laptops from Redux store
  const laptops = useSelector(selectLaptop);

  // Retrieve the cart items from Redux store
  const cart = useSelector(selectCart);

  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Calculate total price and total cart count dynamically
  let total = 0;
  let cartCount = 0;
  cart.forEach((element) => {
    total = total + element.count * element.price; // Calculate total price
    cartCount = cartCount + element.count; // Count total items
  });

  return (
    <div>
      {/* Section for displaying available laptops */}
      <h1>Available Laptops</h1>
      {laptops.map(({ id, ram, price, cpu }) => (
        <p key={id}>
          Price: {price} | CPU: {cpu} | RAM: {ram}{" "}
          {/* Add laptop to the cart on button click */}
          <button onClick={() => dispatch(addToCart({ id, price, ram, cpu }))}>
            Add to Cart
          </button>
        </p>
      ))}

      <hr />

      {/* Section for displaying cart summary */}
      <h1>Cart</h1>
      <p>Items in Cart: {cartCount}</p>
      <p>Total Price: RS. {total}</p>
    </div>
  );
};

export default App;
