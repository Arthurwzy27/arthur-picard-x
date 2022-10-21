import React, { useState } from 'react';
import JobCard from '../components/JobCard';
import { jobExperiences, backgroundExperiences } from '../data/data';
import BackgroundCard from '../components/BackgroundCard';
import { useToggleBtn } from '../actions/actions';

import '../components/scss/Experiences.scss';


const About = () => {
  const { isShowing, handleToggle } = useToggleBtn()
  const [activeTab, setActiveTab] = useState("professional");

  const handleProfessionalExp = () => {
    setActiveTab("professional");
  };
  const handleBackgroundExp = () => {
    setActiveTab("background");
  };


  return (
    <div id='experiences' className='experiences-container'>
      <div>
        <ul className="experiences-switch-btn">
          <li className={activeTab === "professional" ? "active" : ""} onClick={handleProfessionalExp} >Professional Experiences</li>
          <li className={activeTab === "background" ? "active" : ""} onClick={handleBackgroundExp} >Background Experiences</li>
        </ul>
        <div className="outlet">
        {activeTab === "professional" ?
          <div className="experiences-wrapper-job">
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
          : <div className="experiences-wrapper-background">
            <span className='experience-header' >Background Experience</span>
            {backgroundExperiences.map((exp, id) =>
              <div key={id} className="projects-background-card">
                <BackgroundCard
                  title={exp.title}
                  location={exp.location}
                  description={exp.description}
                  src={exp.logo}
                  alt={exp.alt}
                  stacks={exp.stacks?.map((stack, id) =>
                    <span key={id} style={{margin: '1rem'}}>{stack}</span>
                  )}
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
