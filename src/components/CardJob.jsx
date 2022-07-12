import React from 'react'

import './CardJob.scss';


const CardJob = ({src, alt, title, text, jobDateBeg, jobDateEnd}) => {
  return (
    <div className="card-job">
      <div className="card-job-img">
        <img className="left" src={src} alt={alt} />
      </div>
      <div className="right">
        <h1>{title}</h1>
        <p>{jobDateBeg} - {jobDateEnd}</p>
        <div className="separator" />
        <p>{text}</p>
      </div>
    </div>
  )
}

export default CardJob
