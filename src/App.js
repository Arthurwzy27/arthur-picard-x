import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './pages/About';
import Projects from './pages/Projects';

import './App.scss';

function App() {
  return (
    <>
      {/* <Router> */}
        <div className="App">
          <Navbar />
          <Banner />
          <Projects  />
          <About />
          {/* <Routes> */}
            {/* <Route path='/' element={<Banner />} /> */}
            {/* <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<ErrorPage />} /> */}
          {/* </Routes> */}
          {/* <Footer /> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
