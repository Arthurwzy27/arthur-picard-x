import React from 'react';
import JobCard from '../components/JobCard';
import { jobExperiences, backgroundExperiences } from '../data/data';
import BackgroundCard from '../components/BackgroundCard';
import { useToggleBtn, useToggleExp } from '../actions/actions';

import '../components/scss/Experiences.scss';


const About = () => {
  const { activeTab, handleProfessionalExp, handleBackgroundExp } = useToggleExp()
  const { isShowing, handleToggle } = useToggleBtn()

  return (
    <div id='experiences' className='experiences-container'>
      <div>
        <ul className='experiences-switch-btn' >
          <li className={activeTab === 'professional' ? 'active-experience-tab' : ''} onClick={handleProfessionalExp}>Professional Experiences</li>
          <li className={activeTab === 'background' ? 'active-experience-tab' : ''} onClick={handleBackgroundExp}>Background Experiences</li>
        </ul>

        <div className='outlet'>
        {activeTab === 'professional' ?
          <div className='experiences-wrapper-job'>
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
                  stacks={job.stacks}
                />
              </div>
            )}
          </div>
          :
          <div className='experiences-wrapper-background'>
            {backgroundExperiences.map((exp, id) =>
              <div key={id}>
                <BackgroundCard
                  title={exp.title}
                  location={exp.location}
                  description={exp.description}
                  date={exp.dateEnd}
                  src={exp.logo}
                  alt={exp.alt}
                  stacks={exp.stacks}
                />
              </div>
            )}
          </div>
        }
        </div>
      </div>





      {/* <div className="experiences-background-wrapper"></div> */}
    </div>
  )
}

export default About;
