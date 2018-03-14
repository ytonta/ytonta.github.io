import React, { Component } from 'react';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Hobbies from './sections/Hobbies';

class Section extends Component {
  render() {
    console.log('section', this);
    return (
      <div className="section">
        <div className="section__container">
          <About />
        </div>

        <div className="section__container">
          <Skills />
        </div>

        <div className="section__container">
          <Experience />
        </div>

        <div className="section__container">
          <Education />
        </div>

        <div className="section__container">
          <Achievements />
        </div>

        <div className="section__container">
          <Hobbies />
        </div>
      </div>
    );
  }
}

export default Section;
