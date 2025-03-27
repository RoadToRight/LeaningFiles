import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const Section2 = () => {
  return (
    <SectionTwo>
      <div className="text-div">
        <div className="text">
          <h1>
            Spark Imagination With <span>Professional Animation Video</span>{" "}
            Services
          </h1>
          <br />
          <p>
            What sets our custom video animation services apart? It's simple!
            Our video animation company is dedicated to the art of storytelling,
            and our commitment to excellence for animation video services. We
            believe that every animation should look great and connect with your
            audience. That's why we take the time to understand your brand,
            message, and audience to tailor animation video services
          </p>
        </div>
        <div className="btnns">
          <Button Text={{ Name1: "Get Started", Name2: "Get Quote" }} />
          <Button
            btnType={"primary"}
            Text={{ Name1: "Let's Talk", Name2: "Live Chat" }}
          />
        </div>
      </div>

      <div className="image">
        <div className="img-div1">
          {" "}
          <img src="/images/Sec2Img/cloud-sec2.jfif" alt="" />
          <img src="/images/Sec2Img/cloud-sec2-2.jfif" alt="" />
        </div>

        <div className="img-div2">
          <img src="/images/Sec2Img/cloud-sec2-3.jfif" alt="" />
          <img src="/images/Sec2Img/cloud-sec2-4.jfif" alt="" />
        </div>
      </div>
    </SectionTwo>
  );
};

export default Section2;

const SectionTwo = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 50px;


  @media (max-width: 1100px) {
    padding: 0px 0px;
  }
  @media (max-width: 970px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
    gap: 50px;
 
  }
  @media (max-width: 468px) {
    gap: 0px;
        
      }

  .text-div {
    width: 50%;
    display: flex;
    flex-direction: column;
    
    gap: 20px;
   

    padding: 0px 30px;

    @media (max-width: 970px) {
      padding-top: 70px;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 0px;
    }
    @media (max-width: 468px) {
      padding-top: 70px;
        padding: 70px 20px;
      }
      @media (max-width: 368px) {
        
        padding: 70px 6px;
      }
    .text {
 
      
      @media (max-width: 970px) {
        text-align: center;
      }
    }
    .text h1 {
      font-weight: 750;
     
      
      @media (max-width: 610px) {
        font-weight: 800;
        font-size: 33px;
      }
      @media (max-width: 468px) {
        font-size: 26px;
        
      }
    
    }
    .text h1 span {
      color: #fd2031;
      font-weight: 800;
    }
    .text p {
      font-size: 15px;
   
      @media (max-width: 610px) {
        font-size: 13px;
      }
      @media (max-width: 468px) {
        
        font-size: 12.5px;
      }
      @media (max-width: 388px) {
        
        font-size: 11.5px;
      }
     
    }
    .btnns {
      display: flex;
      align-items: center;
   
      width: 100%;
      gap: 20px;
    
      @media (max-width: 970px) {
        justify-content: center;
      }
      @media (max-width: 468px) {
        gap: 0px;
      }
    }
  }

  .image {
    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  

    @media (max-width: 970px) {
      padding: 50px 0px;
      width: 100%;
    }
 
  }
  .img-div1 {
    display: flex;
    gap: 10px;

    img {
      border-radius: 360px;
      @media (max-width: 468px) {
        width: 45vw;
      }
    }
    @media (max-width: 970px) {
      gap: 15px;
    }
 
   
  }
  .img-div2 {
    display: flex;
    gap: 10px;
    img {
      border-radius: 360px;

   
      @media (max-width: 468px) {
        width: 45vw;
      }
    }
    @media (max-width: 970px) {
      gap: 15px;
    }
  }
`;
