import React, { useEffect, useRef, useState,useContext } from "react";
import styled from "styled-components";
import './Navigation.css'
import Button from "../Button/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import userDataContext from "../../../userDataContext";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import { toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
  
  
 let Navigate =  useNavigate()
  const [NavToggle, setNavToggle] = useState(false);
  const {loginWithRedirect,isAuthenticated,user,logout} = useAuth0(); 
  const [UserStatus, setUserStatus] = useState(false);
  let {TogggleAccLog, setTogggleAccLog,userData,setuserData,User} = useContext(userDataContext);
  
  const [LoadingCondition, setLoadingCondition] = useState(false);

  const ref = useRef();
 
 useEffect(() => {
   if(user){
    setUserStatus(true)
   }
 }, [])
 
  
 
  const scrollTotop = () =>{

    window.scrollTo({
      top:0,
      behaviour:"smooth"
    })

  }

  window.addEventListener("scroll",function()  {

    if(ref.current){
    if(window.scrollY > 15){
      ref.current.style.backgroundColor = "#1d1c1c";
     
    }else{
      ref.current.style.backgroundColor = "transparent";
    }
   
 
    
  }  
  })





  return (
    <div>
      {
        LoadingCondition && <LoaderSpinner LoadingText={"Logging out"} />  
      }
   
    <nav ref={ref}>
        
      <div className="logo">
        <img src="/images/CloudAnimationLogo.webp" alt=""/>
      </div>
      <div className="icons">
        <ul className={NavToggle ? "sidenavShow" : "sidenavNo"}>
          <li>  <RxCross1 color="white" fontSize={"35px"} className="Cross" onClick={() => setNavToggle(false)}/></li>
          <Link onClick={() => {setNavToggle(false); scrollTotop();}} to={"/"}><li>Home</li></Link>
          <Link onClick={() => {setNavToggle(false); scrollTotop();}} to={"/"}><li>Services</li></Link>
          
          <Link onClick={() => {setNavToggle(false); scrollTotop();}} to={"/about"}><li>About Us</li></Link>
          <Link onClick={() => {setNavToggle(false); scrollTotop();}} to={"/ContactUs"}><li>Contact us</li></Link>
         
         {/* setNavToggle(false) scrollTotop() */}
         
          {
            isAuthenticated ? <div className="logout-name"><li onClick={() => logout()}>Logout </li> <h6> {User?.name}</h6></div> : <li onClick={() => loginWithRedirect()}>Login</li>
          }
      
         
          <Button  btnType={"primary"} Text={{Name1:"Call Now",Name2:"+1-410-402-5094"}}/>
        </ul>
      </div>
      <RxHamburgerMenu onClick={() => setNavToggle(true)} color="white" fontSize={"35px"} className={`Burger`} />
    
    </nav>

    </div>
  );
};

export default Navigation;

