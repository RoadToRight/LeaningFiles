import React from "react";
import styled from "styled-components";
import Button from "../Button.jsx/Button";
import Login from "../LogIn/Login";
import Aboutus from "../AboutUs/Aboutus";
import ContactUs from "../ContactUs/ContactUs";

const Landing = () => {
  return (
    <>
    <LandingdIV>
      <TextPortion>
        <h1>Ecommerce Is Known By Our Website</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ad
          consequuntur, repellendus voluptatibus minus enim ea voluptatem
          expedita numquam aliquam.
        </p>

        <Button text={'BUY NOW'}/>
      </TextPortion>

      <ImagePortion>
        <img src="/images/Ecommerce.jpg" alt="" />
      </ImagePortion>

    </LandingdIV>
 
    <hr />
    <Aboutus />
    <hr />
    <ContactUs />
    </>
  );
};

export default Landing;

const LandingdIV = styled.div`
  min-height:100vh;
  
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 50px 20px;
  gap: 20px;

  @media (968px < width < 10000px) {
    grid-template-columns: repeat(2, 1fr);
   
  }
  
`;
const TextPortion = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 7vw;
    font-weight: 700;
  }
  p {
    font-size: 15px;
  }

  @media (1300px < width < 10000px) {
    h1 {
      font-size: 5vw;
      font-weight: 700;
    }
    p {
    font-size: 18px;
  }
  }

  @media (max-width: 1024px) {
    p {
      font-size: 18px;
    }
    @media (max-width: 368px) {
      p {
        font-size: 13px;
      }
      h1 {
        font-weight: 750;
      }
    }
  }
`;
const ImagePortion = styled.div`
  padding: 30px 50px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width:968px) {
    justify-content: flex-start;
    align-items: flex-start;
  } 
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;
