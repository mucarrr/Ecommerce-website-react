import React from 'react'

const CartItem = ({item}) => {
  return (
    <div className='d-flex align-items-center gap-3 bg-body text-black p-3 rounded'>
        <div>
            <img src={item.image} height={80} width={80} className='object-fit-contain'/>
        </div>
        <div className='w-100'>
            <div>
                <h5>{item.title.slice(0,40)}</h5>
                <p className='text-secondary'>{item.category}</p>
            </div>
            <div className='d-flex justify-content-end align-items-center gap-4'>
                <div className='rounded overflow-hidden d-flex gap-3'>
                    <button>+</button>
                    <button>-</button>
                </div>
                <h4>{item.amount}</h4>
                <button>Delete</button>
            </div>
        </div>

    </div>
  )
}

export default CartItem