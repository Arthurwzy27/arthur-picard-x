import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { allProjects } from '../data/data.js'

// import '../components/scss/ProjectCard.scss';
import './pages.scss';

const Projects = () => {
  return (
    <div id='projects' className='projects-container bg-red-500'>
      <span className='projects-header'>My Projects</span>
      <div className="projects-body">
        {allProjects.map((project, id) =>
          <div key={id} className='projects-card-body'>
            <ProjectCard
              title={project.title}
              description={project.description}
              src={project.src}
              alt={project.alt}
              website_url={project.website_url}
              github_url={project.github_url}
              stacks={project.stacks}
            //   STACKS={project.stacks?.map((stack, id) =>
            //   <span key={id} style={{margin: '1rem'}}>{stack}</span>
            // )}
            />
          </div>
        )}

      </div>
    </div>
  )
}

export default Projects
