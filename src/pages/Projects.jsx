import { logDOM } from '@testing-library/react';
import React from 'react';
import Card from '../components/Card';
import CardProject from '../components/CardProject';
import './Projects.scss';

const Projects = () => {
  return (
    <>
      <h1>Portfolios</h1>
      <div id='projects'>
        {/* <Card
          src={require('../assets/netflix-clone.png')}
          alt='netflix-clone'
          demo='https://fr.reactjs.org/docs/create-a-new-react-app.html'
          code='https://github.com/Arthurwzy27'
        />
        <Card />
        <Card /> */}

        <CardProject
          src={require('../assets/netflix-clone.png')}
          alt='netflix-clone'
          title='Netflix Clone'
          text='This is a Netflix Clone. You wil be able to find all available movie thanks to the DB Movie API. I build this app using react JS, SCSS and javascript. '
        />
        <CardProject
          src={require('../assets/cryptons.png')}
          alt='cryptons'
          title='Cryptons'
          text='Cryptons is a realtime cryptocurrency portfolio tracker'
          stack=''
        />
        <CardProject
          src={require('../assets/netflix-clone.png')}
          alt='beer-n-beer'
          title='Beer N Beer'
          text='N/A'
        />
        <CardProject
          src={require('../assets/todo-list.png')}
          alt='to-do-list'
          title='ToDo List'
          text='N/A'
        />
      </div>
    </>
  )
}

export default Projects
