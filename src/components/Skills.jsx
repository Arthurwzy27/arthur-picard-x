import React from 'react';
import { skills } from '../data/data.js'
import { IconContext } from "react-icons";

import './scss/Skills.scss';

const Skills = () => {

  // console.log(skills)

  return (
    <div className='skills-container m-7'>
      <div className='skills-header'>
        <div className='skills-header-title'>
          <span>My Skills and Tools</span>
        </div>
        <div className='skills-header-subtitle'>
          <span>The skills, tools and technologies I use to bring your products to life</span>
        </div>

      </div>
      <div className="skills-wrapper">
        <div className="skills-category">
          <div className="skills-title">
            <span>Front-End</span>
          </div>
          <div className="skills-body">
            {skills?.filter(skill => skill.category === 'front')
              .map((skill, id) =>
                <IconContext.Provider key={id} value={{ className: 'skills-R-icons' }}>
                <div className='skill-icon' key={id}>
                  <span className='skill-icon-img'>{skill.icon}</span>
                  <span className='skill-icon-name'>{skill.name}</span>
                </div>
                </IconContext.Provider>
            )}
          </div>
        </div>
        <div className="skills-back">
          <div className="skills-title">
            <span>Back-End</span>
          </div>
          <div className="skills-body">
            {skills?.filter(skill => skill.category === 'back')
              .map((skill, id) =>
                <IconContext.Provider key={id} value={{ className: 'skills-R-icons' }}>
                  <div className='skill-icon' >
                    <span className='skill-icon-img'>{skill.icon}</span>
                    <span className='skill-icon-name'>{skill.name}</span>
                  </div>
                </IconContext.Provider>
            )}
          </div>
        </div>

        <div className="skills-tools">
          <div className="skills-title">
            <span>Tools</span>
          </div>
          <div className="skills-body">
            {skills?.filter(skill => skill.category === 'tool')
              .map((skill, id) =>
                <IconContext.Provider key={id} value={{ className: 'skills-R-icons' }}>
                <div className='skill-icon' key={id}>
                  <span className='skill-icon-img'>{skill.icon}</span>
                  <span className='skill-icon-name'>{skill.name}</span>
                </div>
                </IconContext.Provider>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
