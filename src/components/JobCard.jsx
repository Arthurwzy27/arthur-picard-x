import React, { useState } from 'react';

import './scss/JobCard.scss';


const JobCard = ({src, alt, title, company, description, dateBeg, dateEnd}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="job-card-accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title} @{company}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive &&
        <div className="accordion-content">
          <div className="job-card-overview">
            <img className="job-company-img" src={src} alt={alt} />
            <span>{dateBeg} - {dateEnd}</span>
          </div>
          <span>{description}</span>
        </div>}
    </div>
  );
};

export default JobCard;
