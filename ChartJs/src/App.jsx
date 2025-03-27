import { useState } from 'react'
import './App.css'
import LineChart from './Graphs/Line'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
     <LineChart /> 
     <ToastContainer
   
      style={{
        "--toastify-color-progress-light":"#4caf50",
      }}
     />
    </>
  )
}

export default App
