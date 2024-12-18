import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {ProductProvider} from './context/productContext';
import CartProvider from './context/CartContext.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </CartProvider>

    <ToastContainer autoClose={2000} position='top-left' newestOnTop/>
  </StrictMode>,
)
