import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import FirstNavbar from './components/firstNavbar'
import Navbar from './components/navbar'
import Home from './pages/home';
import Products from './pages/products';
import ProductCart from './pages/productCart';
import { useSelector } from 'react-redux';
import Authentification from './pages/authentification';

function App() {
  const { auth } = useSelector(state => state.ecommerce)
  return (
    <>
      {
        auth 
        ? 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/product/cart' element={<ProductCart/>}/>
        </Routes>
        : 
        <Authentification/> 
      }
    </>
  )
}

export default App