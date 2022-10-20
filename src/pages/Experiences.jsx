import React from 'react';
import JobCard from '../components/JobCard';
import { jobExperiences, backgroundExperiences } from '../data/data';
import BackgroundCard from '../components/BackgroundCard';
import { useToggleBtn } from '../actions/actions';

import '../components/scss/JobCard.scss';


const About = () => {
  const { isShowing, handleToggle } = useToggleBtn()

  return (
    <div id='experiences' className='experiences-container'>
      <div className="experiences-wrapper-job">
        <span className='experience-header'>Professional Experience</span>
        {jobExperiences.map((job, id) =>
          <div key={id}>
            <JobCard
              handleToggle={() => handleToggle(id)}
              isShowing={isShowing === id}
              title={job.title}
              company={job.company}
              src={job.logo}
              alt={job.alt}
              location={job.location}
              dateBeg={job.dateBeg}
              dateEnd={job.dateEnd}
              description={job.description}
              stacks={job.stacks?.map((stack, id) =>
                <span key={id} style={{margin: '1rem'}}>{stack}</span>
              )}
            />
          </div>
        )}
      </div>
      <div className="background-experiences">
        <span className='experience-header'>Background Experience</span>
        {backgroundExperiences.map((exp, id) =>
          <div key={id} className="projects-background-card">
            <BackgroundCard
              title={exp.title}
              description={exp.description}
              src={exp.src}
              alt={exp.alt}
              website_url={exp.website_url}
              github_url={exp.github_url}
              stacks={exp.stacks?.map((stack, id) =>
                <span key={id} style={{margin: '1rem'}}>{stack}</span>
              )}
            />
          </div>
        )}
      </div>
      {/* <div className="experiences-background-wrapper"></div> */}
    </div>
  )
}

export default About;
