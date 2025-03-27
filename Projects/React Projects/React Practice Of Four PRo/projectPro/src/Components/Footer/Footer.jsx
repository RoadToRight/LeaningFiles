import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <FooterP>
      <div className="social-media-nav-links container">
        <div className="media">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaGithub />
        </div>

        <div className="links">
          <ul>
            <li>Home</li>
            <li>News</li>
            <li>AboutUs</li>
            <li>ContactUs</li>
            <li>OurTeam</li>
          </ul>
        </div>
      </div>
        <hr />
      <div className="copyright container">

            <h6>Copyright <FaRegCopyright /> 2024 Designed By Sameer</h6>

      </div>
    </FooterP>
  );
};

export default Footer;

const FooterP = styled.div`
  min-height: 25vh;
  background: linear-gradient(135deg, #3428bb, #4d4ffa);
   
    .social-media-nav-links{
      
        display: flex;
        flex-direction:column ;
        align-items: center;
        gap: 20px;
     padding: 15px 0px;
    }
  .media {
    font-size: 35px;
    color: white;
    display: flex;
    gap: 11px;
  }
  .links {
    font-size: 19px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width:468px) {
        font-size: 16px;
}
    
    align-items: center;
    ul {
     list-style: none;
     display: flex;
     align-items: center;
    justify-content: center;
     gap: 16px;
     @media (max-width:468px) {
        gap: 8px;
        padding-right: 30px;
}
    }
  }

  .copyright{
    
    padding: 13px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

 
`;
