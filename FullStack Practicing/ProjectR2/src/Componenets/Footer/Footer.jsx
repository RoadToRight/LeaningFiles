import React from "react";
import styled from "styled-components";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { SiVimeo } from "react-icons/si";
import "./Footer.css"

const Footer = () => {
  return (
    <FooterDiv>
      <div className="sections">
        <div className="sec-1 sec">
          <img src="/images/CloudAnimationLogo.webp" alt="" />
          <br />
          <br />
          <p>
            Welcome to the cutting-edge video animation
            evolution. Armed with state-of-the-art technology and an insatiable
            drive for perfection, we're engineering the future of visual
            storytelling.
          </p>

          <h2>Say Hello!</h2>
          <hr />
          <div className="iconss">
            <RiFacebookFill cursor={"pointer"}/>
            <FaInstagram cursor={"pointer"}/>
            <ImLinkedin2 cursor={"pointer"}/>
            <FaYoutube cursor={"pointer"}/>
            <FaTwitter cursor={"pointer"}/>
            <SiVimeo cursor={"pointer"}/>
          </div>
          <br />
          <img src="/images/Footer/dmca-badge-w250-2x1-02.png" alt="" />
        </div>
        <div className="sec-2 sec">
          <h2>Quick Links</h2>
      <br />
         <div className="lists">
         <li className="footer-li">Home</li>
          <li className="footer-li">Why Us</li>
          <li className="footer-li">Portfolio</li>
          <li className="footer-li">Process</li>
          <li className="footer-li">Career</li>
          <li className="footer-li">Pricing</li>
          <li className="footer-li">Case Studies</li>
          <li className="footer-li">Contact Us</li>
          <li className="footer-li">Get Quote</li>
         </div>
        </div>

        <div className="sec-3 sec">
          <h2>Services</h2>
          <br />
<div className="lists">
          <li className="footer-li">3D Animation</li>
          <li className="footer-li">2D Animation</li>
          <li className="footer-li">Whiteboard</li>
          <li className="footer-li">Motion Graphics</li>
          <li className="footer-li">Video Editing</li>
          <li className="footer-li">Logo Animation</li>
          <li className="footer-li">Architectural Visualization</li>
          <li className="footer-li">CGI-VFX</li>
          <li className="footer-li">Infographics</li>
          <li className="footer-li">Hybrid & Cel</li>
        </div>
        </div>
        <div className="sec-4 sec">

          <h2>Resource Augmentation</h2>
<br />
<div className="lists">
          <li className="footer-li">Hire 2D Animator</li>
          <li className="footer-li">Hire 3D Animator</li>
          <li className="footer-li">Hire Animator</li>
          <li className="footer-li">Hire Game Designer</li>
          <li className="footer-li">Hire UI/UX Designer</li>
          </div>
        </div>
      </div>

     
    <br />
      <hr />
     <div className="copyright">
     <h6>© Copyright 2024 - <span>Cloud Animations.</span></h6>
     <h6>Privacy Policy | Terms & Conditions</h6>
     </div>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #2b2c2c, #1a1a1a);
  color: white;
  padding: 10px 40px;

    li{

        list-style: none;

   
    }
    @media (max-width:640px) {
      
      grid-template-columns: repeat(1, 1fr);
      padding: 0px 20px;

    }
    @media (max-width:340px) {
      
      grid-template-columns: repeat(1, 1fr);
      padding: 0px 6px;

    }
  .sections {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    padding-top: 70px;

    @media (max-width:970px) {
      
      grid-template-columns: repeat(2, 1fr);

    }
    @media (max-width:640px) {
      
      grid-template-columns: repeat(1, 1fr);
      

    }
  }
  .lists{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .sec{
    height: 100vh;
    text-align: center;

    h2{
      color: #FD2031;
    }
    @media (max-width:640px) {
      
      height: auto;
      

    }
  }
  .iconss{
    display: flex;
    align-items:center;
    justify-content:space-evenly;
  }
  .copyright {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .copyright h6 span{
    color: #FD2031;
  }
`;
