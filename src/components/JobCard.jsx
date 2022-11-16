import React from 'react';
import { IconContext } from "react-icons";

import { SlLocationPin } from "react-icons/sl";

import './scss/JobCard.scss';


const JobCard = ({src, alt, title, company, location, description, dateBeg, dateEnd, stacks, isShowing, handleToggle}) => {
  return (
    <div className="job-card-accordion-container">
      <div className="accordion-title" onClick={handleToggle}>
        <span>
          <span style={{fontWeight: 'bold'}}>{title}</span> @{company}</span>
        <div className="accordion-title-right">
          <span>{dateBeg} - {dateEnd}</span>
          <span style={{paddingLeft: '1rem'}}>{isShowing ? '-' : '+'}</span>
        </div>
      </div>
      <div className={`answer_wrapper ${isShowing ? "accordion-open" : ''}`} >
        <div className="job-card-localisation">
          <span><SlLocationPin /> {location}</span>
        </div>
        <div className="job-card-overview">
          <div className="job-card-overview-left">
            {/* <span>{description}</span> */}
            {description ?
              description?.map((text, id) =>
                <ul key={id} className='background-card-description'>
                  <li >{text}</li>
                </ul>
              )
            : ''}

            <IconContext.Provider value={{ className: 'react-icons', size: 42 }}>
              <div className="job-card-stack">
                {stacks?.map((stack, id) =>
                  <span key={id}>{stack}</span>
                )}
              </div>
            </IconContext.Provider>
          </div>
          <img className="job-card-overview-right" src={src} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
