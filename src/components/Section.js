import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div className='section'>
        {/* About */}
        <div className='section__about'>
         <h2 className='section__title'>About</h2>
        </div>

        {/* Skills */}
        <div className='section__skills'>
          <h2 className='section__title'>Skills</h2>

          <ul className='skill'>
            <li className='skill__item'>
              JavaScript
              <span className='skill__percentage' style={{ width: '90%' }}></span>
            </li>
            <li className='skill__item'>
              CSS
              <span className='skill__percentage' style={{ width: '95%' }}></span>
            </li>
            <li className='skill__item'>
              HTML
              <span className='skill__percentage' style={{ width: '95%' }}></span>
            </li>
            <li className='skill__item'>
              GIT
              <span className='skill__percentage' style={{ width: '80%' }}></span>
            </li>
            <li className='skill__item'>
              Photoshop
              <span className='skill__percentage' style={{ width: '90%' }}></span>
            </li>
            <li className='skill__item'>
              Illustrator
              <span className='skill__percentage' style={{ width: '70%' }}></span>
            </li>
            <li className='skill__item'>
              Sitecore
              <span className='skill__percentage' style={{ width: '60%' }}></span>
            </li>
            <li className='skill__item'>
              Magento
              <span className='skill__percentage' style={{ width: '50%' }}></span>
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className='section__experience'>
          <h2 className='section__title'>Experience</h2>
        </div>

        {/* Education */}
        <div className='section__education'>
          <h2 className='section__title'>Education</h2>
        </div>

        {/* Achievements */}
        <div className='section__achievements'>
          <h2 className='section__title'>Achievements</h2>
        </div>

        {/* Hobbies */}
        <div className='section__hobbies'>
          <h2 className='section__title'>Hobbies</h2>
        </div>
      </div>
    );
  }
}

export default Section;
