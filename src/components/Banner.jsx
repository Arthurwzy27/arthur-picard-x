import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import bannerVideo from '../assets/bannerVideo.mp4';

import './scss/Banner.scss';


const Banner = () => {
  return (
    <div className='banner-container'>
      <video autoPlay loop muted className='banner-video' style={{position: 'absolute', height: '100vh', width: '230vw', objectFit: 'cover' }}>
        <source className='banner-source-video' src={bannerVideo} type='video/mp4' />
      </video>
      <div className="banner-wrapper">
        {/* <div > */}
          <h1 className='banner-title'>Hey, I'm Arthur</h1>
          <h3 className='banner-subtitle'>Sofware Engineer, Fullstack App developer</h3>
          <button><Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>⇣</Link></button>
        {/* </div> */}
        {/* <div className="banner-right">
          <img src={require('../assets/banner.png')} alt="banner-img" />
        </div> */}
      </div>
    </div>
  )
}

export default Banner
