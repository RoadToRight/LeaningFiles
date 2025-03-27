import React from 'react'
import styled from 'styled-components';
import Button from '../Button/Button';

const Section4 = () => {
  return (
    <SectionFour>
        
        <div className="portfolio">
           <h1><span className='dot'>.</span>Portfolio</h1> 
        </div>
        <div className="text-div">
        <div className="text">
          <h1>
          Premier Animated Video Services
          </h1>
          <br />
          <p>
          From fun explainer videos to eye-catching promotional animations, our video animations services cater to every project. Each animation is created with care and creativity to help our clients stand out and achieve their goals. But don't just take our word for it – let our portfolio speak for itself. Get inspired, and imagine the possibilities with our animated video services. As a top video animation agency, we deliver animations that engage, entertain, retain, and convert.
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
       <img src="/images/pizaCloud.webp" alt="" className='img-fluid'/>
      </div>
        
    </SectionFour>
  )
}

export default Section4;

const SectionFour = styled.div`

    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    place-items: center;
    padding: 0px 50px;
    position: relative;
    @media (max-width:1090px) {
        grid-template-columns: repeat(1,1fr);
        padding: 80px 50px;
        gap: 20px;
    }
    @media (max-width:625px) {
        
        padding: 80px 0px;
        
    }
    .portfolio{

        
        color: #FD2031;
        
        position: absolute;
        top: -58px;
        left: 43px;

        @media (max-width:768px) {
            top: -48px;
            left: 12px;
        }
        @media (max-width:475px) {
           
          top: -40px;
          left: 3px;
        }
       

        h1{
         
            font-size: 80px;
            font-weight: 1000;
           
            @media (max-width:768px) {
            font-size: 65px;
            
        }
        @media (max-width:475px) {
            font-size: 53px;
            
        }
        }
    }
    .text-div{
  
      
      display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
        @media (max-width:1090px) {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;

        }
    }
    .dot{
        color: #262626;
    }
    .btnns{
        display: flex;
       
        
       
    }
    .text h1{
        color: #FD2031;
        font-weight: 750;
      
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width:768px) {
          
          font-weight: 900;
          
        }
        @media (max-width:558px) {
         
         font-size: 32px;
       }
    }
    .text{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
    }
    .text p{
        font-size: 15px;
      
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width:610px) {
          padding: 0px 5px;
          font-size: 13px;
        }
        @media (max-width:558px) {
         
          font-size: 12px;
        }
    }
`