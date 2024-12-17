import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShopify } from "react-icons/fa";
import { productContext } from '../context/productContext';
import api from '../api';

const Header = () => {
  const {selectedCategory, setSelectedCategory} = useContext(productContext);
  

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    api.get('/products/categories')
    .then((res)=>setCategories(["all", ...res.data]))
  },[])
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-light px-4 py-2">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 d-flex align-items-center gap-3" to="/"><FaShopify /><span className='fw-bolder'>Shop Corner</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 align-items-center ms-auto me-4">
        <li className="nav-item py-3">
          <Link className="nav-link active fs-5 fw-bolder" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 fw-bolder" to="/cart">Cart</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fw-bolder fs-5 py-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
            {categories.map((category, index)=> <li key={index} ><button className="dropdown-item" onClick={()=>setSelectedCategory(category)}>{category}</button></li>)}
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header