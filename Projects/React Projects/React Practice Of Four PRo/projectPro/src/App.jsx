import React, { useReducer, useState, useEffect,useContext } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Landing/Landing";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import Products from './Components/Products/Products'
import Login from "./Components/LogIn/Login";
import counterContext from "./Contact";
import "./App.css";
import Aboutus from "./Components/AboutUs/Aboutus";
import ContactUs from "./Components/ContactUs/ContactUs";
import Address from "./Components/Address/Address";
import Footer from "./Components/Footer/Footer";
import Single from "./Components/SingleProduct/Single";

const App = () => {

  const [Data, setData] = useState();
  
  
  const [loading, setLoading] = useState(false);

  
  let API = "https://fakestoreapi.com/products";
    useEffect(() => {
   
      const GetData = async()=>{

        let Fetch = await fetch(API);
        let json = await Fetch.json();
       
        setData(json);
        
      } 
     
      GetData();
  
    }, [])


 

  function loadingkaro(){

    useEffect(() => {
      setLoading(true);
  
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }, []);

  }
  loadingkaro();

  

  return (
    <>
    <counterContext.Provider value = {{Data}}>
    <div>
      {loading ? (
        <HashLoader

          color={"blue"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loader"
        />
      ) : (
        <div>
          <Navigation  loadingkaro={loadingkaro}  />
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/About" element={<Aboutus />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/Address" element={<Address />} />
            <Route path="/SingleProduct"  element={<Single />} />
          </Routes>
          
          <Footer />
        </div>
      )}
    </div>
    </counterContext.Provider>
    </>
  );
};

export default App;

