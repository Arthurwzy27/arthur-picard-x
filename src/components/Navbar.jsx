import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import './scss/Navbar.scss';


const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="navbar-container">
      {/* <ul className="nav-items" style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}> */}
      <ul className="navbar-items">
        <img src={''} className="nav-logo" alt="Logo" onClick={scrollToTop} />
        <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}> // home</Link></li>
        <li><Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>// projects</Link></li>
        <li><Link to="about" spy={true} smooth={true}>// experience</Link></li>
        <li><Link to="contact" spy={true} smooth={true}>// Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
