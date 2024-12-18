import React from 'react'

const Total = ({cart}) => {
    const totalAmount = cart.reduce((acc, item)=> acc + item.amount, 0)
    const totalPrice = cart.reduce((accPrice, item)=> accPrice + item.amount*item.price, 0)
  return (
    <div className='rounded my-5 shadow border p-4 d-flex flex-column  justify-content-between bg-white '>
        <div className='fs-4'>
        <p><span className='text-warning fw-bold'>{totalAmount} </span>items added to cart</p>
        <p>Total price = <span className="text-success fw-bold">{totalPrice.toFixed(2)}$</span></p>
        </div>
        <button className='btn btn-warning py-2 px-4'>Confirm Order</button>

    </div>
  )
}

export default Total

