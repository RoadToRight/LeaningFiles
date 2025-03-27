import React from "react";
import styled from "styled-components";
import './Contact.css'
const ContactUs = () => {
  return (
    <ContactDIv> 
      <div className="ContactText">
        <div className="text">
        <div className="textBhai">
        <h1>Contact Us</h1>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, consequuntur quaerat itaque praesentium quasi dicta, dolorum quas repellat, tempora recusandae deserunt earum nobis?</h6><br />
        </div>
        <div className="input-contact">
        <input type="email" placeholder="Enter Email"/>
        <textarea rows={5} cols={44} placeholder="Type Here...."></textarea>
        </div>
            
        </div>
       <br />
        
        <div class="letter-image">
            
          <div class="animated-mail">
            <div class="back-fold"></div>
            <div class="letter">
            Thank's
              <div class="letter-border"></div>
              <div class="letter-title"></div>
              <div class="letter-context"></div>
              <div class="letter-stamp">
                
                <div class="letter-stamp-inner"></div>
              </div>
            </div>
            <div class="top-fold"></div>
            <div class="body"></div>
            
            <div class="left-fold text-white"><h5>Send Now</h5></div>
          </div>
        
        </div>
      
        
     
      </div>
      
      <div className="mapParent">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28946.568241648052!2d67.07080586700074!3d24.921131304855933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b808bfd6b1%3A0x997b1a02c2570822!2sGulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1722924920695!5m2!1sen!2s"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </ContactDIv>
  );
};

export default ContactUs;




const ContactDIv = styled.div`

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  max-width: 100%;
  min-height: 100vh;



  padding: 7rem 15px;

  @media (max-width:1023px) {
   flex-wrap: wrap;
   gap: 30px;
   
  }
  .ContactText {
    background-color: white;
    padding: 25px 10px;
    border-radius: 7px;
    width: 40%;
    min-height: auto;
    box-shadow: 3px 4px 12px 1px rgba(0,0,0,0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
   flex-direction: column;
   text-align: center;
   @media (max-width:1023px) {
    width: 100%;
   
  }
   .input-contact{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    input{

      padding: 8px 22px;

    }
    textarea{
      @media (max-width:425px) {
   
      width: 100%;
   
  }
    }
   }
   .textBhai{
    display: flex;
    flex-direction: column;
    gap: 12px;
    h6{
      font-size: 12px;
    }
   }
  }
  .mapParent {
    width: 50%;
    min-height: auto;
    @media (max-width:1023px) {
    width: 100%;
   
  }

    .map {
      border: 0;
      width: 100%;
      
    }
  }

  
`;
