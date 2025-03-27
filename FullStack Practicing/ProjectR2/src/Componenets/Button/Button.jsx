import React, { useState } from 'react'
import styled from "styled-components"
import './Button.css'
import { Link } from "react-router-dom";

const Button = ({Text,btnType,onclick}) => {

 




  return (

    <ButtonB $btnType = {btnType} onClick={onclick ? () => onclick(Text.Name1) : null}>
    
    

   <span><div btn-before={Text.Name1} btn-after={Text.Name2}></div></span>
   
</ButtonB>
  )
}

export default Button;

const ButtonB = styled.div`

@import url('https://fonts.googleapis.com/css?family=Montserrat:600&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

span{
  position: relative;
  display: inline-flex;
  width: 160px;
  height: 45px;
  margin: 0 4px;
  perspective: 1000px;
  @media (max-width:480px) {
    width: 145px;
    }

}
span div{
  font-size: 14px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform .25s;
 
  font-family: "Poppins", sans-serif !important;
  font-weight: 540;
  font-style: normal;
  
}
span div:before{
  position: absolute;
  content: attr(btn-before);
  height: 45px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.$btnType === "primary" ? "#FD2031" : "#323132"};
  box-sizing: border-box;
  background-color: ${(props) => props.$btnType === "primary" ? "#FD2031" : "#323132"};
  box-shadow: inset 0px 0px 5px 4px rgba(255,255,255,0.25);
  @media (max-width:480px) {
    width: 145px;
    }
}


span div:after{
  position: absolute;
  content: attr(btn-after);
  cursor: pointer;
  height: 45px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.$btnType === "primary" ? "#FD2031" : "#323132"};
  box-sizing: border-box;
  background-color: ${(props) => props.$btnType === "primary" ? "#FD2031" : "#323132"};
  box-shadow: inset 0px 0px 5px 4px rgba(255,255,255,0.2);
  @media (max-width:480px) {
    width: 145px;
    }
}
span:nth-child(1) div:before{
  color: #fff;
  background: ${(props) => props.$btnType === "primary" ? "#FD2031" : "#323132"}1;
  transform: rotateY(0deg) translateZ(22px);
}
span:nth-child(1) div:after{
  color: #ffffff;
  transform: rotateX(90deg) translateZ(22px);
}
span:nth-child(2) div:before{
  color: #fff;
  background: ${(props) => props.$btnType === "primary" ? "#FD2031" : "#323132"}1;
  transform: rotateX(-90deg) translateZ(22px);
}
span:nth-child(2) div:after{
  color: #ffffff;
  transform: rotateY(0deg) translateZ(22px);
}
span:nth-child(1) div:hover{
  transform: translateZ(-23px) rotateX(-90deg);
}
span:nth-child(2) div:hover{
  transform: translateZ(-23px) rotateX(90deg);
}
    


`
