import React from "react";
import styled from "styled-components";
import "./About.css";
import { useLocation } from "react-router-dom";

const Aboutus = () => {


    const locaion = useLocation()
  console.log(locaion)
  return (
    <AboutUsParent className="">
      <AboutUs className="AboutUs">
        <div className="AboutUs-Text">
          <h1>ABOUT US</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam obcaecati repellendus pariatur in iusto blanditiis culpa nobis dolorum fuga molestiae ab beatae, odio minus vel quo dolorem aliquid inventore eaque.</p>
          
   <div className="About-Progress">
    <h6>Quaity Product</h6>
   <div class="progress" role="progressbar" aria-label="Success example Animated striped" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-100 progress-bar-striped progress-bar-animated">100%</div>
</div><br />
<h6>Leading Company</h6>
<div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar   w-50 progress-bar-striped progress-bar-animated" >50%</div>
</div><br />
<h6>Best Discounts</h6>
<div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar   w-75 progress-bar-striped progress-bar-animated" >65%</div>
</div><br />
<h6>Customer Satisfaction</h6>
<div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar  w-100 progress-bar-striped progress-bar-animated"  >100%</div>
</div>
   </div>

</div>
        

        <div className="About-Img">
          <img src="/images/2668382.jpg" alt="" className="img-fluid" />
        </div>
      </AboutUs>
    </AboutUsParent>
  );
};

export default Aboutus;

const AboutUsParent = styled.div``;
const AboutUs = styled.div`
  width: 100%;
 min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width:768px) {
      flex-wrap: wrap;
  }

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  font-weight: 900;
  font-style: normal;
  
  .AboutUs-Text{
   
    min-height: auto;

    width: 45%;
    padding: 15px 13px;
    
    text-align: center;
    @media (max-width:768px) {
      width: 100%;
      padding: 35px 100px;
  }
  @media (max-width:468px) {
      width: 100%;
      padding: 35px 40px;
  }
  @media (max-width:368px) {
      width: 100%;
      padding: 35px 35px;
  }
   .About-Progress{
    .progress{
      margin-top: 14px;
    }
   }

    h1{
      font-size: 45px;
   
      @media (max-width:768px) {
        font-size:40px;
  }
  @media (max-width:368px) {
    font-size: 34px;
  }
    }
    p{
      font-size:12px;
      
      
      @media (max-width:768px) {
        font-size:9px;
  }
    }
  }
  .About-Img{
    width: 45%;
    min-height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width:1024px) {
      width: 55%;
      
  }
    @media (max-width:768px) {
      width: 100%;
      justify-content: flex-start;
      align-items: flex-start;
      
  }
    img{

      

    }
  }

`;
