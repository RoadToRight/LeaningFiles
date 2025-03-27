import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const Contact = () => {

  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNum] = useState();
  const [name, setname] = useState("");
  const [message, setmessage] = useState('')
  const [Subject, setSubject] = useState("");
  const [ErrorMessage, setErrorMessage] = useState(false);
  const minWords = 5; 
  const handleMessage = () => {
   
    const wordCount = message.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount < minWords) {
      setErrorMessage(``);
      setErrorMessage(true);
  } else {
      // Handle successful submission (e.g., send data to API)
      console.log('Submitted:', message);
      // Reset the form or do something else
      setmessage('');
      setErrorMessage(false);
      SendEmail();
  }
  }

  const SendEmail = async () => {
    const url = "https://first-upload-gamma.vercel.app";
    
    try {
        let result = await fetch(`${url}/api/user/send/Email`,{
          method:"post",
          body:JSON.stringify({email,phoneNumber,name,message,Subject}),
          credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
        })
        result = await result.json();
        console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  



  return (
    <ContactUs>
      

      <div className="contact">
        <div className="items-parent">
        <div className="text">
          <h1>
            <span>Lights. Camera.</span> Action!
          </h1>
          <p>
            Collaborate with us on your animation project and turn your concepts
            into stunning visual masterpieces.
          </p>
        </div>
        <div className="sec-1">
          <input value={name} type="text" placeholder="Full name" required onChange={(e) => setname(e.target.value)}/>
          <input value={email} type="email" placeholder="Email address" required onChange={(e) => setemail(e.target.value)}/>
        </div>

        <div className="sec-2">
          
    <input value={phoneNumber} type="number" placeholder="Phone number" required onChange={(e) => setphoneNum(e.target.value)}/>
    <input value={Subject} type="text" placeholder="Subject" required onChange={(e) => setSubject(e.target.value)}/>
          <textarea value={message} placeholder="Write message" cols={10} rows={4} onChange={(e) => setmessage(e.target.value)}></textarea>
          <span>{ErrorMessage ? <small>Please enter at least {minWords} words.</small> : null}</span>
        </div>
       <div className="btnn">
       <Button onclick={() => { handleMessage(); }} Text={{Name1:"Submit" , Name2:"Submit"}}/>
       </div>

        </div>
      </div>
    </ContactUs>
  );
};

export default Contact;

const ContactUs = styled.div`
  min-height: 150vh;
 display: flex;
  background:#292828;
  justify-content: center;
  align-items: center;
  
  .contact {
    padding: 20px 10px;
    margin-top: 40px;
    width: 100%;
    min-height: 100vh;
    z-index: 2;
    position: absolute;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
  
  }
  .contact h1 {
    text-align: center;
  }
  .contact p{
    text-align: center;
  }
  .contact h1 span {
    color: #ffffff;
    
  }
  .items-parent{
  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    gap: 20px;
    padding: 60px 10px;
    
    background: linear-gradient(135deg, #fd2031, #f12536);
    box-shadow: inset 0px 0px 5px 4px rgba(255, 255, 255, 0.25);
    box-shadow: 0px 0px 5px 4px rgba(255, 0, 0, 0.452);
    
    @media (max-width:440px) {
        width: 100%;
    }
  }
  .sec-1{
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
    
    input{
        width: 100%;
        padding: 8px;
        border-radius: 5px;
        color: #fd2031;
        background-color: #bdadad;
    }
  }
  .sec-2{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
   
    width: 100%;
    input{
        width: 100%;
        padding: 8px;
        border-radius: 5px;
        color: #fd2031;
        background-color: #bdadad;

    }
    textarea{
        width: 100%;
        padding: 15px;
        border-radius: 5px;
        color: #fd2031;
        background-color: #bdadad;
    }
  }
  input:focus{
    outline: none;
  }
  ::placeholder{
    color: white;
  }
  textarea:focus{
    outline: none;
  }
  .btnn{
    cursor: pointer;
  }
`;
