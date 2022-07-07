import React from 'react'
import { IconContext } from "react-icons";
import { FaGithub, FaReact, FaSass } from "react-icons/fa";
import { DiRuby } from "react-icons/di";

import './CardProject.scss';

const CardProject = ({src, alt, title, text, stack}) => {
  return (
    <div className="card-project">
      <div className="card-project-img">
        <img className="left" src={src} alt={alt} />
      </div>
      <div className="right">
        <h1>{title}</h1>
        <div className="separator" />
        <p>{text}</p>
        <IconContext.Provider value={{ className: 'react-icons', size: 42 }}>
          <div className="stack-icon">
            <h4 className="">Stack:</h4>
            {stack}
            <FaReact />
            <FaSass />
            <FaGithub />
            <DiRuby />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default CardProject
