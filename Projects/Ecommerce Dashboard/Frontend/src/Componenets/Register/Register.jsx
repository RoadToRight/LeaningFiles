import React, { useState ,useEffect} from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
const Navigate = useNavigate();
  // States 

  const CollectData = async() => {
   
      let result = await fetch('http://localhost:4000/register',{

        method:"post",
        body:JSON.stringify({Name,Email,Password}),
        headers:{'Content-Type' : 'application/json'},

      })

      result = await result.json();
      if(result.Already){
        Navigate("/login")
      }
      else if(result){

        Navigate("/")
        
        localStorage.setItem('users' , JSON.stringify(result.Data))
        localStorage.setItem('token' , JSON.stringify(result.token))
      }
      console.log(result.Already)
     

  }
  let auth = localStorage.getItem('users')
  const navigate =  useNavigate();
    useEffect(()=>{
  
      if(auth == null){
  
       return
  
      }else{
        Navigate("/")
      }
  
    },[])


  return (
    <div className='Register-Div'>

      <h2>Register</h2>

      <div className="inputs">
        <input type="text"  placeholder='Enter Your Name' value={Name} onChange={(e) => setName(e.target.value) }/>
        <input type="email"  placeholder='Enter Your Email' value={Email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Enter Your Password' value={Password} onChange={(e) => setPassword(e.target.value)}/>
      </div>

    <button className='Submit-Btn' onClick={CollectData}>Submit</button>

    </div>
  )
}

export default Register
