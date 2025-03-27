import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button';

const Section1 = () => {
  return (
    <SectionOne>
      <div className="video-div">
      <video width={"100%"}  muted loop autoplay="autoplay" >
      <source src="/SOHAIB SHOWREEL_4.mp4" type="video/mp4"></source>
    
      </video>
      <div className="background">
   
      </div>

      
      </div>
 
      <div className="text">
       <div className="text-area">
       <h2>Stand Out With Our</h2>
        <h1> <span className='Text-red'>Video</span> Animations</h1>
        <p>With Cloud Animations, tap into limitless video animations services to make a lasting impression, drive engagement, and achieve goals.</p>
       <div className="btnn">
       <Button  Text={{Name1:"Get Started" , Name2:"Get Quote"}}/>
       <Button btnType={"primary"} Text={{Name1:"Let's Talk" , Name2:"Live Chat"}}/>
       </div>

       </div>
        <div className="awards">
          <img src="/images/awards/award-1.webp"  alt="" />
          <img src="/images/awards/award-2.webp"  alt="" />
          <img src="/images/awards/award-3.webp"  alt="" />
          <img src="/images/awards/award-4.webp"  alt="" />
        </div>
      </div>
      
    </SectionOne>
  )
}

export default Section1;


const SectionOne = styled.div`

position: relative;
margin: 0px;
display: flex;
min-height: 100vh;
overflow: hidden;
align-items: center;
.text-area{
  width: 100%;
  @media (max-width:480px) {
    margin-top: -30px;
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
    }
}
.text{
  position: absolute;
  
  padding: 10px 11%;
  padding-top: 100px;
  width: 70%;
  color: white;

   
   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  min-height: 100vh;
  @media (max-width: 1085px) {

    width: 100%;

  }
  @media (max-width:480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 1%;
    padding-top: 115px;
    }

 .Text-red{
  color: red;
 }
 h2{
  font-size: 40px;
  font-weight: 650;
  @media (max-width: 640px) {

    font-size: 33px;

}
@media (max-width:480px) {
  font-size: 29px;
    }
 }
 h1{
  font-size: 56px;
  font-weight: 800;
  @media (max-width: 640px) {

    font-size: 42px;
}
@media (max-width:480px) {
  font-size: 35px;
    }
 }
 p{
  font-size: 13px;
  @media (max-width: 640px) {
    padding: 0px 10px;
font-size: 11px;
}
@media (max-width:480px) {
  font-size: 11.5px;
  text-align: center;
    }
 }
 .btnn{
  display: flex;
 
  margin-left: -15px;
 }
 .awards{
  width:100%;
  height: 80%;
  display: flex;
 
  align-items: center;
  gap: 20px;
  @media (max-width:480px) {
    padding: 0px 10px;
    height: 100%;
    }
  img{
    width: 20%;
    height: 20%;
   
  }
  
 }
}
.background{
  height: 123vh;
  background-color: black;
  width: 100%;
  opacity: 0.7;
 top: 0px;
  position: absolute;
  
}
.video-div{

position: relative;
height:100vh ;
width: 100vw;
overflow: hidden;
z-index: -1000;

  video{
    position: absolute;
    width: auto;
    height: auto;
    min-width: 100vw;
    min-height: 100vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: -1000;
  }
}
`