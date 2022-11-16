import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import bannerVideo from '../assets/bannerVideo.mp4';
import { Typewriter } from 'react-simple-typewriter'

import './scss/Banner.scss';


const Banner = () => {
  return (
    <div className='banner-container'>
      <video autoPlay loop muted className='banner-video'
        style={{position: 'absolute',
          width: '200vw',
          height: '100vh',
          objectFit: 'cover'
        }}>
        <source className='banner-source-video' src={bannerVideo} type='video/mp4' />
      </video>
      <div className="banner-wrapper">
        <h1 className='banner-title'>
          <span className='banner-fix-title'>Hey, I'm</span>
          <Typewriter
            className={'XXXXX'}
            words={['Arthur', '<Arthur />']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={150}
            deleteSpeed={100}
            delaySpeed={2500}
          />

        </h1>

          <h3 className='banner-subtitle'>Sofware Engineer, Fullstack App developer</h3>
          <button><Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>⇣</Link></button>
      </div>
    </div>
  )
}

export default Banner
