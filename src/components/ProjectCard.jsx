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
            <a className='project-website-link' href={website_url} target='_blank' rel='noreferrer'>View Website</a>
            <a className='project-github-link' href={github_url} target='_blank' rel='noreferrer'>View on Github</a>
          </div>
            <div className="stack-icons">
              <IconContext.Provider value={{ className: 'stack-icon-img' }}>
                <span>{stacks}</span>
              </IconContext.Provider>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
