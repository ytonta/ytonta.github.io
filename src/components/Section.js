import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div className='section'>
        {/* About */}
        <div className='section__container'>
          <div className='section__about'>
            <h2 className='section__title'>About</h2>

            <div className='about'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi corporis facere, et consequuntur fugiat consequatur molestias ipsa amet sed dolore quibusdam ad! Ad quo fugit et numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi corporis facere, et consequuntur fugiat consequatur molestias ipsa amet sed dolore quibusdam ad! Ad quo fugit et numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi corporis facere, et consequuntur fugiat consequatur molestias ipsa amet sed dolore quibusdam ad! Ad quo fugit et numquam.
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className='section__container'>
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
        </div>

        {/* Experience */}
        <div className='section__container'>
          <div className='section__experience'>
            <h2 className='section__title'>Experience</h2>

            <div className='experience'>
              <ul className='timeline'>
                <li className='timeline__item'>
                  <span className='timeline__content experience__item'>
                    <span className='experience__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <span className='experience__year'>2000 - 2000</span>
                    <span className='experience__position'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <ul className='experience__description'>
                      <li className='experience__description__item'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                      <li className='experience__description__item'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                      <li className='experience__description__item'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                      <li className='experience__description__item'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                      <li className='experience__description__item'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                  </span>
                </li>
                <li className='timeline__item'>
                  <span className='timeline__content experience__item'>
                    <span className='experience__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <span className='experience__year'>2000 - 2000</span>
                    <span className='experience__position'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <ul className='experience__description'>
                      <li className='experience__description__item'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                      <li className='experience__description__item'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                      <li className='experience__description__item'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                      <li className='experience__description__item'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                      <li className='experience__description__item'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                  </span>
                </li>
                <li className='timeline__placeholder'></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className='section__container'>
          <div className='section__education'>
            <h2 className='section__title'>Education</h2>

            <div className='education'>
              <ul className='timeline'>
                <li className='timeline__item'>
                  <span className='timeline__content education__item'>
                    <span className='education__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <span className='education__year'>2000 - 2000</span>
                    <span className='education__place'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                  </span>
                </li>
                <li className='timeline__item'>
                  <span className='timeline__content education__item'>
                    <span className='education__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <span className='education__year'>2000 - 2000</span>
                    <span className='education__place'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                  </span>
                </li>
                <li className='timeline__placeholder'></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className='section__container'>
          <div className='section__achievements'>
            <h2 className='section__title'>Achievements</h2>

            <div className='achievement'>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div className='section__container'>
          <div className='section__hobbies'>
            <h2 className='section__title'>Hobbies</h2>

            <div className='hobby'>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
