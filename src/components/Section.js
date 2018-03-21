import React, { Component } from 'react';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Hobbies from './sections/Hobbies';

class Section extends Component {
  render() {
    const {
      about,
      skills,
      experience,
      education,
      achievements,
      hobbies,
    } = this.props;

    return (
      <div className="section">
        <div className="section__container">
          <About {...about} />
        </div>

        <div className="section__container">
          <Skills {...skills} />
        </div>

        <div className="section__container">
          <Experience {...experience} />
        </div>

        <div className="section__container">
          <Education {...education} />
        </div>

        <div className="section__container">
          <Achievements {...achievements} />
        </div>

        <div className="section__container">
          <Hobbies {...hobbies} />
        </div>
      </div>
    );
  }
}

export default Section;
