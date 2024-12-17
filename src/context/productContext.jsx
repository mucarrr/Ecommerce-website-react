import React, { createContext, useEffect, useState } from 'react'
import api from '../api';


export const productContext = createContext()
const ProductProvider = ({children}) => {
   
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all"); 

    useEffect(()=>{
        const url = selectedCategory ==="all" ? "./products" : `./products/category/${selectedCategory}`
        api.get(url)
        .then((res)=>{setProducts(res.data);
        })
    },[selectedCategory])
    
return <productContext.Provider value={{products, setProducts, selectedCategory, setSelectedCategory}}>{children}</productContext.Provider>
}

export {ProductProvider}
