import React from 'react'
import {Routes, Route,Navigate } from 'react-router-dom'



import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Offers from '../pages/Offers';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Thankyou from '../pages/Thankyou';




const Routers = () => {

  return (
   <Routes>

    <Route path='/' element={<Navigate to='/home'/>}/>

    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/services' element={<Services/>} /> 
    <Route path='/offers' element={<Offers/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/thank-you' element={<Thankyou/>}/>
   </Routes>
  )
}

export default Routers