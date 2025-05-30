import React from 'react';

const Header = () => {
  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i className="header-toggle d-xl-none bi bi-list"></i>

      <div className="profile-img">
        <img
          src="assets/img/my-profile-img.jpg"
          alt="Profile"
          className="img-fluid rounded-circle"
        />
      </div>

      <a href="index.html" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Alex Smith</h1>
      </a>

      <div className="social-links text-center">
        <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#OutPost"><i className="bi bi-house navicon"></i> Our Post</a></li>
          <li><a href="#createPost"><i className="bi bi-person navicon"></i> Creat Post</a></li>
          <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Galarry</a></li>
          <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
          <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>

          <li className="dropdown">
            <a href="#">
              <i className="bi bi-menu-button navicon"></i> 
              <span>Dropdown</span> 
              <i className="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li className="dropdown">
                <a href="#">
                  <span>Deep Dropdown</span> 
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>

          <li><a href="#contact" className="active"><i className="bi bi-envelope navicon"></i> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
