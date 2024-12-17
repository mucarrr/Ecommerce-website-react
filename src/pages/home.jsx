import React, { useContext } from 'react'
import { productContext } from '../context/productContext';
import Card from '../components/Card';
import Loader from '../components/Loader';

const Home = () => {
  const {products, setProducts, selectedCategory} = useContext(productContext);

  return (
    <div className='mt-4 container'>
      <h2>{products.length > 0 && `${products.length} products found`}</h2>
      <h5 className='mx-2 mt-2'>
        {selectedCategory !="all" && "results for " + selectedCategory}
      </h5>

      {products.length > 0 ? (<div className="wrapper">
      {products.map((product)=><Card product={product} key={product.id}/>)}
      </div>) : (<Loader/>)}
        
    </div>
  )
}

export default Home