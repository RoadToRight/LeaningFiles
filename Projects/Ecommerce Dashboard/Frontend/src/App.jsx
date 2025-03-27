import { useState,useEffect } from "react";

import "./App.css";
import Nav from "./Componenets/Nav/Nav";
import Register from "./Componenets/Register/Register";
import Footer from "./Componenets/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Products from "./Componenets/Products/Products";
import UpdateProducts from "./Componenets/UpdateProducts/UpdateProducts";
import Private from "./Componenets/PrivateComponent/Private";
import Logout from "./Componenets/Logout/Logout";
import Login from "./Componenets/Login/Login";
import AddPro from "./Componenets/AddProducts/AddPro";
import Productsup from "./Componenets/Productsup/Productsup";

function App() {
  let auth = localStorage.getItem('users')


  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
        {auth ? 
          <Route element={<Private />}>
            <Route path="/" element={<Products />}></Route>
            <Route path="/updateProducts" element={<UpdateProducts />}></Route>
            <Route path="/AddPro" element={<AddPro />}></Route>
            <Route path="/Logout" element={<Logout />}></Route>
            <Route path="/Products/:id" element={<Productsup />}></Route>
         
          </Route>
         : null
        }
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
