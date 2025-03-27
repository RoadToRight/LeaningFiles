import React from 'react'
import { VscSearch } from "react-icons/vsc";
import { IoCartSharp } from "react-icons/io5";
import './Navigation.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#"><img className='imageLogo' src="/images/Headphone_Logo-removebg-preview.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>

      </ul>

      <div className='nav-right-icons'>
        <VscSearch />
        <IoCartSharp />
      </div>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navigation;
