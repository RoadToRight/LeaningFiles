import React, { useEffect } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {

  const navigate = useNavigate();

  let auth = localStorage.getItem('users');
  let authName;
  if(auth == "undefined"){
    auth= null
  }else{
    authName = JSON.parse(auth);
  }



  const Logout = () => {

    localStorage.clear('users')
    

  }
  

  return (
    <nav>
     
      <div className="links">
     {auth ? 
        <ul>
          <Link to="/">
            <li>Products</li>
          </Link>
          <Link to="/AddPro">
            <li>Add Products</li>
          </Link>
          <Link to="/updateProducts">
            <li>Products</li>
          </Link>

          <Link to="/Products">
            <li>Update Products</li>
          </Link>
          
          
          <Link>
            <li>Profile</li>
          </Link>
          <Link to="/register" onClick={Logout}>
              <li>Logout</li>
          </Link>
          <li>
            {authName.Name}
          </li>
          </ul>

        :
        <ul>  <Link  to="/register">
            <li>Sign Up</li>
          </Link> 
          <Link to="/login">
            <li>Login</li>
          </Link>

        </ul>
    
     }

    

      </div>
    </nav>
  );
};

export default Nav;
