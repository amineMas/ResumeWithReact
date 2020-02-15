import React from 'react';
import './App.css';
import Nav from './components/nav';
import About from './components/about';
import Resume from './components/resume';
import Degree from './components/degree';
import Skills from './components/skills';



function App() {
  return (
    <React.Fragment>
    <Nav></Nav>
    <div className="container-fluid p-0">
      <About></About>
    </div>
    <hr className="m-0"></hr>
      <Resume></Resume>
      <hr className="m-0"></hr>
      <Degree></Degree>
      <hr className="m-0"></hr>
      <Skills></Skills>
    </React.Fragment>
  );
}

export default App;
