import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container mt-5">
      <h1>Cart</h1>
      <div >
        <div className="d-flex flex-column gap-5 mt-5">
          {cart.map((item) => (
            <CartItem key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
