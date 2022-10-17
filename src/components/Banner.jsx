import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './scss/Banner.scss';

const Banner = () => {
  return (
    <div id='home' className="banner-wrapper">
      <div className='banner-items'>
        <h1>Hey, I'm Arthur</h1>
        <h3>Sofware Engineer, Fullstack App developer</h3>
        <button><Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>⇣</Link></button>
      </div>
      {/* <div className="banner-right">
        <img src={require('../assets/banner.png')} alt="banner-img" />
      </div> */}
    </div>
  )
}

export default Banner
