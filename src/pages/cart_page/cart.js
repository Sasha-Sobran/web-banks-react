import { NavLink } from "react-router-dom";
import "./css/cart.css";

const Cart = () => {
  return (
    <div className="cart_page">
      <h1>Waifus Cart</h1>
      <h4>Total amount</h4>
      <div className="buttons2">
        <NavLink className="cart_page_button" to={`/catalog`}>
          Back To Catalog
        </NavLink>
        <NavLink className="cart_page_button" to={`/checkout`}>
          Continue
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
