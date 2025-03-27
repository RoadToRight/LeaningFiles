import React, { useState } from "react";
import "./Login.css";
import styled from "styled-components";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  const [password, setpassword] = useState(true);
  const [changeeyestate, setChangeEyeState] = useState(false);
  const [password2, setpassword2] = useState(true);
  function ChangeEye() {
    setChangeEyeState((props) => !props);
    setpassword((props) => !props);
    setpassword2((props) => !props)
    console.log("Change");
  }

  return (
    <LoginP>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form className="form">
            <label htmlFor="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <div className="password-login">
              <input
                className="input"
                type={`${password ? "password" : "text"}`}
                name="pswd"
                placeholder="Password"
                required=""
              ></input>
              <EyeParent1 className="EyeParent" $isclicked={changeeyestate}>
                <IoEyeOutline className="Eye" onClick={ChangeEye} />
              </EyeParent1>

              <EyeParent2 className="EyeParent" $isclicked={changeeyestate}>
                <IoEyeOffOutline className="Eye" onClick={ChangeEye} />
              </EyeParent2>
            </div>
            <button className="button1">Log in</button>
          </form>
        </div>

        <div className="register">
          <form className="form">
            <label htmlFor="chk" aria-hidden="true" className="Register">
              Register
            </label>
            <input
              className="input"
              type="text"
              name="txt"
              placeholder="Username"
              required=""
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
             <div className="EyeParent2">
            <input
              className="input RegisterInput"
              type={`${password2 ? "password" : "text"}`}
              name="pswd"
              placeholder="Password"
              required=""
            />
           
              {password2 ? (
                <IoEyeOutline className="Eye2"  onClick={ChangeEye}/>
              ) : (
                <IoEyeOffOutline className="Eye2"   onClick={ChangeEye}/>
              )}
            </div>

            <button className="button2">Register</button>
          </form>
        </div>
      </div>
    </LoginP>
  );
};

export default Login;

const LoginP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  min-height: 100vh;

  .password-login {
    position: relative;

    .Eye {
    }
  }
  .EyeParent {
    position: absolute;
    right: 7px;
    top: 5%;
    font-size: 20px;
  }
  .RegisterInput {
  
    position: relative;
  }
  .EyeParent2 {
  position: relative;
  .Eye2{

    position: absolute;
    right: 7px;
    top: 25%;
    font-size: 20px;

  }
  }

 
`;
const EyeParent1 = styled.div`
  display: ${(props) => (props.$isclicked ? "none" : "block")};
`;

const EyeParent2 = styled.div`
  display: ${(props) => (props.$isclicked ? "block" : "none")};
`;
