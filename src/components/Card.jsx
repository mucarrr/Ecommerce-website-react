import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const Card = ({product}) => {
  const {addToCart} = useContext(CartContext)

  
  return (
    <div className='card py-4'>
        <div className='d-flex justify-content-center'>
            <img src={product.image} height={120} className='object-fit-contain' />
        </div>
        <div className="card-body">
            <h4 className='text-truncate'>{product.title}</h4>
            <h4 className='text-secondary'>{product.category}</h4>
            <h5>{product.price}$</h5>
            <button className='w-100 rounded mt-1' onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card