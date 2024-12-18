import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home";
import Header from "./components/Header";
import Cart from "./pages/Cart";


const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App