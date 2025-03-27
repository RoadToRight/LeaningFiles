import React from 'react';
import './App.css';
import Navigation from './assets/Components/Navigation/Navigation';
import { Route, Routes } from "react-router-dom";
import Home from './assets/Components/HomePage/Home';

const App = () => {
 
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </div>
  );
};

export default App;
