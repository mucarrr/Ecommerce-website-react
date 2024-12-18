import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
    const {addToCart, removeFromCart, decreaseAmount} = useContext(CartContext)
    
    
  return (
    <div className="d-flex align-items-center gap-3 bg-body text-black p-3 rounded">
      <div>
        <img
          src={item.image}
          height={80}
          width={80}
          className="object-fit-contain"
        />
      </div>
      <div className="w-100">
        <div>
          <h5>{item.title.slice(0, 40)}</h5>
          <p className="text-secondary">{item.category}</p>
          
        </div>
        <div className="d-flex justify-content-end align-items-center gap-4">
        <span className="text-success fw-bold text-center fw-bolder">{(item.price*item.amount).toFixed(2)}$</span>
          <div className="rounded overflow-hidden d-flex gap-3">
            <button onClick={()=>addToCart(item)}>+</button>
            <button onClick={()=>decreaseAmount(item.id)}>-</button>
          </div>
          <h4>{item.amount}</h4>
          <button onClick={()=> removeFromCart(item.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
