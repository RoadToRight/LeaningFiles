import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useAuth0 } from '@auth0/auth0-react'
import { createAuth0Client } from '@auth0/auth0-spa-js';

const Register = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState();
  const [passHide, setpassHide] = useState(true)

  
 let {user,loginWithRedirect,logout,getAccessTokenSilently,isAuthenticated } = useAuth0();

 
 
  let Navigate = useNavigate()
  useEffect(() => {
   let token = Cookies.get("token")
   if(token){

    Navigate("/")

   }
    
    
  }, [])
  useEffect(() => {
    if(isAuthenticated){

    }
  }, [user])
  
  


 
  const RegisterUser = async () => {

    const url = "https://first-upload-gamma.vercel.app";

    try {
      let result = await fetch(`${url}/api/user/register`, {
        method: "post",
        body: JSON.stringify({ email, name, password }),
        headers: {
          "Content-Type": "application/json",
          'authorization': `Bearer ${token}`
        },
      });
      result = await result.json();
      toast(result.message,{
        className:"custom-toast-error",
        progressClassName:"custom-progress-error"
      });
      if(result.success){
        Navigate("/Email/Verify",{state:{email:email,name:name,password:password}})
      }
      // console.log(result)
      
    } catch (error) {
      console.log(error)
    }
   

   
    
  };

 
  /**
   * !!!!!!!!!!!!!!!!!!!!
   * 
   */
  return (
    <RegisterDiv>
      <div className="Register">
        <h3>Register</h3>
        <button onClick={() => logout()}>logout</button>
        <div className="Register-Access">
          <br />
          <div className="inputs">
            <div className="input1 input">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="input2 input">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="input3 input">
              <label>Password</label>
             <div className="input-eye">
             <input
                type={passHide ? "password" : "text"}
                placeholder="Enter Your Password"               
                onChange={(e) => setpassword(e.target.value)}
              />
              {
                passHide ? <IoEyeOff className="eye closeE" onClick={() => setpassHide(false)}/> :  <IoEye className="eye openE" onClick={() => setpassHide(true)}/>
              }
             
              
             </div>
            </div>
          </div>
          <p className="Options">
            Have account{" "}
            <span className="Options LoginNow">
              <Link to="/login">Login Now!</Link>
            </span>
          </p>
          
          <div className="btnn">
            <Button
              onclick={RegisterUser}
              Text={{ Name1: "Register", Name2: "Register" }}
            />
          </div>
        </div>
      </div>
      
    </RegisterDiv>
  );
};

export default Register;

const RegisterDiv = styled.div`
  min-height: 140vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252424;
  .Register {
    min-height: 70vh;
    background: linear-gradient(135deg, #fd2031, #f12536);
    width: 50%;
    border-radius: 5px;
    display: flex;
    padding: 10px 20px;
    flex-direction: column;
    box-shadow: inset 0px 0px 5px 4px rgba(255, 255, 255, 0.25);
    box-shadow: 0px 0px 5px 4px rgba(255, 0, 0, 0.452);
    @media (max-width: 578px) {
      width: 90%;
    }
    h3 {
      color: #ffffff;
      text-align: center;
      font-weight: 1000;
      box-shadow: inset 0px 0px 5px 4px rgba(255, 55, 55, 0.25);
      padding: 15px 0px;
    }
    .inputs {
      display: flex;
      flex-direction: column;

      position: relative;
      gap: 50px;

      width: 100%;
    }
  }
  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background-color: #bdadad;
    box-shadow: inset 0px 0px 5px 4px rgba(255, 255, 255, 0.25);
    color: #fd2031;
  }
  input:focus {
    outline: none;
  }
  .input1 label {
    position: absolute;
    top: -24px;
    color: white;
    font-weight: 700;
    font-size: 17px;
  }
  .input2 label {
    position: absolute;
    top: 70px;
    color: white;
    font-weight: 700;
    font-size: 17px;
  }
  .input3 label {
    position: absolute;
    top: 170px;
    color: white;
    font-weight: 700;
    font-size: 17px;
  }
  .Options {
    font-weight: 700;
    font-size: 17px;
    color: #fff2f2;
  }
  .LoginNow a {
    color: white;
  }

  .btnn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .Register-Access {
    min-height: 70vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .input-eye{
    position: relative;
  }
  .eye{
    color: #ff0015;
    position: absolute;
    top: 14px;
    right: 16px;
    font-size: 24px;
    cursor: pointer;
  }
`;
