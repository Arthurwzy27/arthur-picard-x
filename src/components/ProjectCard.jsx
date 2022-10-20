import React from 'react'
import { IconContext } from "react-icons";

import './scss/ProjectCard.scss';

const ProjectCard = ({src, alt, title, description, stacks, website_url, github_url}) => {
  return (
    <div className="project-card-container">
      <div className="project-card-wrapper">
        <div className="project-card-left">
          <img className="project-card-img-left" src={src} alt={alt} />
        </div>
        <div className="project-card-right">
          <h1 className='project-card-right-title'>{title}</h1>
          <span className='project-card-right-description'>{description}</span>
          <div className="project-card-right-description-link">
            <a href={website_url} target='_blank' rel='noreferrer'>View Website</a>
            <a href={github_url} target='_blank' rel='noreferrer'>View on Github</a>
          </div>
          <IconContext.Provider value={{ className: 'react-icons', size: 42, gap: 50 }}>
            <div className="stack-icons">
              <span>{stacks}</span>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
