import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Navigation from './Componenets/Navigation'
import Home from './Pages/Home'
import AddListing from './Pages/AddListing'
import Listing from './Pages/Listing'
import Single from './Pages/Single'
import Order from './Pages/Order'


function App() {


  return (

    <>
    <Navigation />
      <Routes>
        
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Add/listing' element={<AddListing />}></Route>
        <Route path='/listing' element={<Listing />}></Route>
        <Route path='/books/view/:Bookid' element={<Single />}></Route>
        <Route path='/Orders' element={<Order />}></Route>
      </Routes>
    </>
  )
}

export default App
