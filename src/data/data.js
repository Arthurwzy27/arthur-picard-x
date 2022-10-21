import { FaGithub, FaReact, FaSass, FaNode } from "react-icons/fa";
import { DiRuby, DiRor } from "react-icons/di";
import { SiJavascript, SiCypress, SiStorybook, SiHtml5, SiMeteor } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";


const reactIcon = <FaReact />
const sassIcon = <FaSass />
const githubIcon = <FaGithub />

const rubyIcon = <DiRuby />
const rorIcon = <DiRor />

const jsIcon = <SiJavascript />
const cypressIcon = <SiCypress />
const storybookIcon = <SiStorybook />
const htlmIcon = <SiHtml5 />
const linkedinIcon = <SlSocialLinkedin />
const nodejsIcon = <FaNode />
const meteorIcon = <SiMeteor />
// const githubIcon = < />


export const navbarLink = [
  { id: 'projects', name: '// projects' },
  { id: 'experiences', name: '// experiences' },
  { id: 'footer', name: '// contact' },
]

export const allProjects = [
  { title: 'Cryptons',
    description: 'Cryptons is a realtime cryptocurrency portfolio tracker',
    src: require('../assets/cryptons.png'),
    alt: 'cryptons',
    stacks: [rorIcon, rubyIcon, jsIcon, sassIcon, githubIcon],
    website_url: '',
    github_url: 'https://github.com/arthurwzy27',
  },
  { title: 'Pizza Movie DB',
    description: 'This is a Netflix Clone. You wil be able to find all available movie thanks to the DB Movie API. I build this app using react JS, SCSS and javascript. ',
    src: require('../assets/netflix-clone.png'),
    alt: 'project img',
    stacks: [reactIcon, sassIcon, githubIcon],
    website_url: '',
    github_url: 'https://github.com/arthurwzy27',
  },
  {
    title: 'ToDo List',
    description: 'This app is a stylish ToDo list. Add your daily notes and filter them trhoughout the day. Keep track of your note in a simple unique app. When your task is done, just hide it, it´s simple as that!',
    src: require('../assets/todo-list.png'),
    alt: 'ToDo list',
    stacks: [jsIcon, cypressIcon, sassIcon, githubIcon],
    website_url: '',
    github_url: 'https://github.com/arthurwzy27',
  },
  {
    title: 'Netflix Clone',
    description: 'This is a Netflix Clone. You wil be able to find all available movie thanks to the DB Movie API. I build this app using react JS, SCSS and javascript. ',
    src: require('../assets/netflix-clone.png'),
    alt: 'project img',
    stacks: [jsIcon, reactIcon, sassIcon, githubIcon],
    website_url: '',
    github_url: 'https://github.com/arthurwzy27',
  },
  { title: 'Cryptons',
    description: 'Cryptons is a realtime cryptocurrency portfolio tracker',
    src: require('../assets/cryptons.png'),
    alt: 'cryptons',
    stacks: [rorIcon, rubyIcon, jsIcon, sassIcon, githubIcon],
    website_url: '',
    github_url: 'https://github.com/arthurwzy27',
  },
  { title: 'Pizza Movie DB',
    description: 'This is a Netflix Clone. You wil be able to find all available movie thanks to the DB Movie API. I build this app using react JS, SCSS and javascript. ',
    src: require('../assets/netflix-clone.png'),
    alt: 'project img',
    stacks: [reactIcon, sassIcon, githubIcon],
    website_url: '',
    github_url: 'https://github.com/arthurwzy27',
  },
  {
    title: 'ToDo List',
    description: 'This app is a stylish ToDo list. Add your daily notes and filter them trhoughout the day. Keep track of your note in a simple unique app. When your task is done, just hide it, it´s simple as that!',
    src: require('../assets/todo-list.png'),
    alt: 'ToDo list',
    stacks: [jsIcon, cypressIcon, sassIcon, githubIcon],
    website_url: '',
    github_url: 'https://github.com/arthurwzy27',
  },
  {
    title: 'Netflix Clone',
    description: 'This is a Netflix Clone. You wil be able to find all available movie thanks to the DB Movie API. I build this app using react JS, SCSS and javascript. ',
    src: require('../assets/netflix-clone.png'),
    alt: 'project img',
    stacks: [jsIcon, reactIcon, sassIcon, githubIcon],
    website_url: '',
    github_url: 'https://github.com/arthurwzy27',
  },
]

export const jobExperiences = [
{
  title: 'Web developer Freelancer',
  company: '',
  logo:require('../assets/movie-logo.png'),
  alt:'freelancer',
  location: 'Barcelona, Spain',
  dateBeg: '2022',
  dateEnd: 'Present',
  description: ['Develop and maitain website with Javascript / React.js'],
  stacks: [jsIcon, reactIcon, nodejsIcon, sassIcon],

},
{
  title: 'Junior Program Developer',
  company: 'Daysk',
  logo:require('../assets/daysk.jpeg'),
  alt:'Daysk',
  location: 'Barcelona, Spain',
  dateBeg: 'Feb 2022',
  dateEnd: 'May 2022',
  description:[
    'Define and build technical components/solutions for the project (using Javascript, React, Node.js and MongoDB).',
    'Maintain high quality of code, as well as solve appearing challenges with respect to the team guidelines and conventions.',
    'Improving the UI/UX experience (Figma).',
    'Creating reusable components (Storybook).',
    'Ensure high level of functional and technical compliance of the features with the help of unit/integration tests (Cypress).',
    'Code review, code refactoring and documentation.'],
  stacks: [jsIcon, reactIcon, nodejsIcon, sassIcon, cypressIcon, meteorIcon]
},
{
  title: 'Space Planner',
  company: 'CBRE @Google',
  logo:require('../assets/google.png'),
  alt:'Google',
  location: 'Zurich, Switzerland',
  dateBeg: '2019',
  dateEnd: '2021',
  description: ['Responsible for the growing of Zurich campuses : 15 buildings at over 1.5M square feet of premium office space. Coordinating and planning on opening new offices : floor drawings, move plans, teams allocation. Designing comprehensive reports, analyses, portfolio metrics and complex presentations for Google Site meetings, reporting to Google Facility Leads directly. Leading moves on daily basis as well as strategic space planning for upcoming months & all aligned with legal and safety regulations.',],
},
{
  title: 'Space Planning & Event Assistant',
  company: 'Randstad @Google',
  logo:require('../assets/google.png'),
  alt:'Google',
  location: 'Zurich, Switzerland',
  dateBeg: '2018',
  dateEnd: '2019',
  description: ['Space Planning: Strategic organization of the diverse campuses - Coordinating and planning move. Monthly reporting - Seated Headcount, Event: Manage and support a diverse range of events, conferences and parties from booking, planning and setting up venue for events. ',],
},
]

export const backgroundExperiences = [
{
  title: 'Fullstack Web developer program',
  company: 'Le Wagon',
  logo:require('../assets/lewagon-logo.png'),
  alt:'lewagon-logo',
  location: 'Barcelona, Spain',
  dateBeg: '2022',
  dateEnd: '2022',
  description: '9-week full-time intensive coding bootcamp learning : Ruby & Ruby on Rails, Software architecture (HTML5, CSS, JavaScript ES6, Bootstrap), Relational Database, SQL (PostgreSQL, MySQL, Redis) & ORM (Active Record), Algorithms & data structures, Git & GitHub, Web interfaces, Prototyping on Figma, UX & UI, Heroku, DOM, Events & AJAX, Parse & store data in standard files (JSON,CSV, XML), Web scraping',
  stacks: [jsIcon, reactIcon, nodejsIcon, sassIcon, cypressIcon, meteorIcon],

},
{
  title: 'Bachelor in International Business management and finance',
  company: 'ESAM School of Advanced Management and Finance',
  logo:require('../assets/esam-logo.png'),
  alt:'esam-logo',
  location: 'Lyon, France',
  dateBeg: '2013',
  dateEnd: '2016',
  description: '',
},
{
  title: 'University Exchange Bachelor of Business Administration',
  company: 'American College Dublin',
  logo:require('../assets/acd-logo.png'),
  alt:'acd-logo',
  location: 'Dublin, Ireland',
  dateBeg: '2014',
  dateEnd: '2014',
  description: '',
},
{
  title: 'Ba',
  company: 'LFIGP Lycée Français International Georges Pompidou',
  logo:require('../assets/google.png'),
  alt:'lfigp-logo',
  location: 'Dublin, Ireland',
  dateBeg: '2004',
  dateEnd: '2012',
  description: '',
},
]
