import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify'

export const CartContext = createContext()
const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (product) =>{
      const found = cart.find((i)=>i.id===product.id)
      if(!found){
        setCart(cart.concat({...product, amount:1}));
        toast.success("Product added to cart")
      }else{
        const updated= {...found, amount: found.amount+1}
        const newCart = cart.map((i)=>updated.id===i.id ? updated: i)
        setCart(newCart);  
        toast.info(`Product amount updated (${updated.amount})`)    }
       
      
    }
  const removeFromCart = (delete_id) => {
    const filtered = cart.filter((i)=>i.id !== delete_id)
    setCart(filtered)
    toast.error("Product removed from cart")
  }
  const decreaseAmount = (delete_id) => {
  const found = cart.find((i)=>i.id === delete_id)
  if(found.amount > 1){
    const updated = {...found, amount:found.amount-1}
    const newBasket = cart.map((item)=> item.id === updated.id ? updated : item)
    setCart(newBasket)
    toast.info(`Product amount updated (${updated.amount})`) 

  } else {
    removeFromCart(delete_id)
    toast.error("Product removed from cart")
  }
 
  }


  return <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart, decreaseAmount}}>
    {children}
  </CartContext.Provider>
}

export default CartProvider