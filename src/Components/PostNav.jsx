import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../assets/style/PostNav.css';
import logo from '../Images/logo.png';
import logos from '../Images/logos.png';

function PostNav() {
  


  return (
    <nav className="navbar navbar-expand-lg pt-0">
      <div className="container-fluid">
        <a className="navbar-brand m-0" href="#">
          <img src={logo} className='logo' alt="logo" />
          <img src={logos} className='logos' alt="logos" />
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
                <Link className='nav-link' to={'/'}>Home</Link>
            </li>
             <li>
                <Link className='nav-link' to={'/post'}>Post</Link>
            </li>
             <li>
                <Link className='nav-link' to={'/gallery'}>Gallery</Link>
            </li>
          </ul>

         
        </div>
      </div>
    </nav>
  );
}

export default PostNav;
