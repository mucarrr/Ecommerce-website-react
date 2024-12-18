import React from 'react'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div className='text-center fs-5 mt-5'>
        <p>No items added to cart</p>
        <Link to="/" className='btn btn-primary'>Go to products</Link>
    </div>
  )
}

export default Info