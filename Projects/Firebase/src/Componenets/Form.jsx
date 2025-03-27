import React, { useContext } from "react";
import styled from "styled-components";
import{ useFirebase } from "../firebase";



const Form = () => {
  let Firebase = useFirebase()
  console.log(Firebase)
    const storeDataFire = () => {

    let res =  Firebase.signUpUserwithEmailPass("123@gmail.com","smeer0786").then((value) => console.log(value))
      console.log(res)
    }
    const loginUser = () => {

      Firebase.LoginUpUserWithEmailAndPassword("syed@gmail.com","sameer")

    }


    const createEntryCalller = async () => {

      let a = await Firebase.createEntry();
      console.log(a)

    }

  return (
    <FormDiv>
      <h1>Sign Up Form</h1>

        <div className="inputs">
            <input type="email" /><br />
            <input type="password" /><br />
            <button onClick={() => storeDataFire()}>Submit</button>
            <button onClick={loginUser}>Login User</button>
            <button onClick={createEntryCalller}>Create Entry</button>
        </div>

    </FormDiv>
  );
};

export default Form;


const FormDiv = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: lightgray;
    .inputs{
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }

`