import React, { createContext, useState } from 'react'

export const CartContext = createContext()
const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (product) =>{
      const found = cart.find((i)=>i.id===product.id)
      if(!found){
        setCart(cart.concat({...product, amount:1}));
      }else{
        const updated= {...found, amount: found.amount+1}
        const newCart = cart.map((i)=>updated.id===i.id ? updated: i)
        setCart(newCart);      }
      
      
    }
  return <CartContext.Provider value={{cart, setCart, addToCart}}>
    {children}
  </CartContext.Provider>
}

export default CartProvider