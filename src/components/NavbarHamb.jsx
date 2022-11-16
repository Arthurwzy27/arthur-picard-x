import React, { useState, useRef } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { navbarLink } from '../data/data'
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";
import { FaGithub } from 'react-icons/fa';
import { SlSocialLinkedin } from "react-icons/sl";


import './scss/NavbarHamb.scss';


const NavbarHamb = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)


  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
  <nav className="navBar">
    {/* <Link to='/' className="nav-logo" spy={true} smooth={true} offset={-70} duration={500}> */}
      <img className="nav-logo" src={require('../assets/logo.png')}  alt="logo" onClick={scrollToTop} />
    {/* </Link> */}
    <IconContext.Provider value={{
      className: 'nav-contact-icons',
      // size: 0,
      // gap: 50,
      // backgroundColor: 'transparent',
      // style: { cursor: "pointer" }
    }}>
      <div className="nav-contact-icons">
        <FaGithub />
        <SlSocialLinkedin />
      </div>
    </IconContext.Provider>
    <button className='menu-button' onClick={handleToggle}>
      {navbarOpen ? (
        <MdClose style={{ color: "rgb(208 201 201 / 86%)", width: "40px", height: "40px" }} />
      ) : (
        <FiMenu style={{ color: "rgb(208 201 201 / 86%)", width: "40px", height: "40px" }} />
      )}
    </button>
    <ul className={`menuNav ${navbarOpen ? " showMenu" : ''}`}>
      {navbarLink?.map((link, id) =>
        <div key={id}>
          <Link className="XXX" to={link.id} spy={true} smooth={true} offset={-70} duration={500}>
            <li key={link.id} className='navbar-items' onClick={()=> setNavbarOpen(false)}>
                {link.name}
            </li>
          </Link>
        </div>
      )}
    </ul>
  </nav>
)
}

export default NavbarHamb
