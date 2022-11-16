import React from 'react'
import { IconContext } from "react-icons";
import { SlLocationPin } from "react-icons/sl";

import './scss/BackgroundCard.scss';

const BackgroundCard = ({src, alt, dateEnd, title, description, stacks, location}) => {
  return (
    <div className="background-experience-container">
      <div className="background-card-wrapper">
        <div className="background-card-header">
          <img className="background-card-logo" src={src} alt={alt} />
          <span>{dateEnd}</span>
          <h1 className='background-title'>{title}</h1>
        </div>

        <div className="background-card-body">
          <div className="background-card-left">
            <span className='background-card-body-location'><SlLocationPin /> {location}</span>
            {description ?
              description?.map((text, id) =>
                <ul key={id} className='background-card-description'>
                  <li >{text}</li>
                </ul>
              )
            : ''}

          </div>

          <div className="stack-icons">
            {stacks ?
              stacks?.map((stack, id) =>
                <IconContext.Provider value={{ className: 'react-icons', size: 38 }}>
                  <span key={id} >{stack}</span>
                </IconContext.Provider>
              )
            : '' }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundCard
