import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import './Navbar.scss';


const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <ul className="nav-items" style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
          <img
            // src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={scrollToTop}
          />
          <li ><Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
          <li ><Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link></li>
          <li><Link to="about" spy={true} smooth={true}>About</Link></li>
          <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
