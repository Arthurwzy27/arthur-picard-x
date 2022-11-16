import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarHamb from './components/NavbarHamb';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <>
      {/* <Router> */}
        <div className="App">
          {/* <Navbar /> */}
          <NavbarHamb />
          <Banner />
          <Skills />

          <Projects />
          <Experiences />
          <Footer />
          {/* <Routes> */}
            {/* <Route path='/' element={<Banner />} /> */}
            {/* <Route path='/projects' element={<Projects />} />
            <Route path='/Experiences' element={<About />} />
            <Route path='*' element={<ErrorPage />} /> */}
          {/* </Routes> */}
          {/* <Footer /> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
