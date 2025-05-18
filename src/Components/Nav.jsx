import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../assets/style/Nav.css';
import logo from '../Images/logo.png';
import logos from '../Images/logos.png';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#Home');

  const sections = [
    { id: 'Home', label: 'Home' },
    { id: 'training-info', label: 'Services' },
    { id: 'training-programs-advanced', label: 'Training Programs' },
    { id: 'Post', label: 'Post' },
    { id: 'getVideo', label: 'Gallery' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          if (
            scrollPos >= element.offsetTop &&
            scrollPos < element.offsetTop + element.offsetHeight
          ) {
            setActiveLink(`#${section.id}`);
          }
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const navbarStyle = {
    backgroundColor: scrolled ? "rgba(0, 0, 0, 0.25)" : "transparent",
    backdropFilter: scrolled ? "blur(10px)" : "none",
    boxShadow: scrolled ? "0 4px 12px rgba(0, 0, 0, 0.7)" : "none",
    transition: "all 0.5s ease",
  };

  return (
    <nav className="navbar navbar-expand-lg pt-0" style={navbarStyle}>
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
  {sections.map((section) => (
    <li
      key={section.id}
      className={`nav-item ${section.id === 'Post' || section.id === 'getVideo' ? 'special-link' : ''}`}
    >
      {(section.id === 'Post' || section.id === 'getVideo') ? (
        <Link
          to={section.id === 'Post' ? '/post' : '/gallery'}
          className={`nav-link nav-link-special ${activeLink === `#${section.id}` ? 'actives' : ''}`}
        >
          {section.label}
        </Link>
      ) : (
        <a
          href={`/#${section.id}`}
          className={`nav-link ${activeLink === `#${section.id}` ? 'actives' : ''}`}
        >
          {section.label}
        </a>
      )}
    </li>
  ))}
</ul>


      
        </div>
      </div>
    </nav>
  );
}

export default Nav;
