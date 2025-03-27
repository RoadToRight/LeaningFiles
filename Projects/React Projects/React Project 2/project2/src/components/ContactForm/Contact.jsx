import React , {useState} from "react";
import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  let [name , setName] = useState("");
  let [email ,setEmail] = useState("");
  let [text , setText] = useState("");

      function viaCall(){

        console.log('dsadsa');

      }

      function logData(event){
        event.preventDefault();
        
    
        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)
      }


  return (
    <div className={`${styles.ContactParent} ${styles.container}  ${styles.grid}`}>
      <div className={`${styles.Buttondiv}`}>
        <Button  text={"VIA SUPPORT CHAT"} icon={<MdOutlineMessage />} />
        <Button on={viaCall} text={"VIA CALL"} icon={<IoIosCall />} />
      </div>
      <br />
      <div className={`${styles.Buttondiv2}`}>
        <Button
          outline={true}
          text={"VIA EMAIL FORM"}
          icon={<MdOutlineMail />}
        />
      </div>

<br />
    <form onSubmit={logData}>
      <div className={styles.input}>
        <label htmlFor="Name" className={styles.label}>
          Name
        </label>
        <input type="text" className={styles.Forminput} />
      </div>

<br />

      <div className={styles.input}>
        <label htmlFor="Email" className={styles.label}>
        Email
        </label>
        <input type="text" className={styles.Forminput} />
      </div>

<br />

      <div className={styles.input}>
        <label htmlFor="Text" className={styles.label}>
        Text
        </label>
        <textarea className={styles.textarea} rows={8}></textarea>
      </div>



      <button type="submit"> Submit </button>

      </form>


      <div className="img">
        <img src="/images/Service 24_7-pana 1.svg" alt="" />
      </div>
  
    </div>

   
  );
};

export default Contact;
