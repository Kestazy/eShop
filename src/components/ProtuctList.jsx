import React from 'react';
import OneProduct from './OneProduct';
import About from './About';
import Cart from './Cart';
import MyHeader from './MyHeader';


import {
BrowserRouter as Router,
Routes,
Route,

} from "react-router-dom";

const ProtuctList = () => {
  return (
    <Router>
        <MyHeader/>
        <Routes>
            <Route path='/' element={<About/>} />
            <Route path='/products' element={<OneProduct/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    </Router>
  )
}

export default ProtuctList