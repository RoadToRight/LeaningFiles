import React, { useEffect, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
 const Navigate =  useNavigate()

  let auth = localStorage.getItem('users')

    const Integration = async() =>{

      let result = await fetch('http://localhost:4000/login' , {

        method:"post",
        body:JSON.stringify({Email,Password}),
        headers:{

          'Content-Type':"application/json"

        }

      })

     result = await result.json();
     console.log(result)
      
     if(result.token){

      localStorage.setItem('users',JSON.stringify(result.users))
      localStorage.setItem('token',JSON.stringify(result.token))
      Navigate("/")
     }
     else if(result.result === "No User Found"){
      alert("No User Found")
     }else{
      alert("Field Is EmPTY")
     }

    }

useEffect(() => {

  if(auth == null){

    return;

  }else{
    Navigate("/")
  }

}, [])



  return (

    <div className='Login-Div'>

    <h2>Login</h2>

    <div className="inputs">
      <input type="email"  placeholder='Enter Your Email' value={Email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder='Enter Your Password' value={Password} onChange={(e) => setPassword(e.target.value)}/>
    </div>

  <button className='Submit-Btn' onClick={Integration}>Login</button>

  </div>
  )
}

export default Login
