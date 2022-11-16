import React from 'react';
import { IconContext } from "react-icons";
import { FaGithub } from 'react-icons/fa';
import { SlSocialLinkedin } from "react-icons/sl";


import '../pages/pages.scss';


const Contact = () => {
  return (
    <div id='footer' className='footer-container'>
      <span className='footer-title'>Let's keep in touch</span>
      <div className="footer-contact-icons">
      <IconContext.Provider value={{
        className: 'footer-contact-icons',
        size: 100,
        gap: 50,
        backgroundColor: 'transparent',
        style: { cursor: "pointer" }
      }}>
        <FaGithub />
        <SlSocialLinkedin />

      </IconContext.Provider>
      </div>
    </div>
  )
}

export default Contact;
