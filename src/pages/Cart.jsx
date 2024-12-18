import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Info from "../components/Info";
import Total from "../components/Total";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container mt-5">
      <h1>Cart Page</h1>
      <div className="row">
        <div className="d-flex flex-column gap-5 mt-5 col-lg-8">
          {cart.length === 0 ? (<Info/>) : (cart.map((item) => (
            <CartItem key={item.id} item={item}/>
          ))) }
        </div>
        <div className="col-lg-4">
        <Total cart={cart}/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
