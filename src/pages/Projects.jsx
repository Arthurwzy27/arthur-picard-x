import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { allProjects } from '../data/data.js'

import './pages.scss';

const Projects = () => {


  return (
    <div className='projects-container'>
      <span className='projects-header'>My Projects</span>
      <div className="projects-body">
        {allProjects.map((project, id) =>
          <ProjectCard
            key={id}
            title={project.title}
            description={project.description}
            src={project.src}
            alt={project.alt}
            stacks={project.stacks?.map((stack, id) =>
              <span key={id}>{stack}</span>
            )}
          />
        )}
      </div>
    </div>
  )
}

export default Projects
