import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="section__skills">
        <h2 className="section__title">Skills</h2>

        <ul className="skill">
          <li className="skill__item">
            JavaScript
            <span className="skill__percentage" style={{ width: '90%' }} />
          </li>
          <li className="skill__item">
            CSS
            <span className="skill__percentage" style={{ width: '95%' }} />
          </li>
          <li className="skill__item">
            HTML
            <span className="skill__percentage" style={{ width: '95%' }} />
          </li>
          <li className="skill__item">
            GIT
            <span className="skill__percentage" style={{ width: '80%' }} />
          </li>
          <li className="skill__item">
            Photoshop
            <span className="skill__percentage" style={{ width: '90%' }} />
          </li>
          <li className="skill__item">
            Illustrator
            <span className="skill__percentage" style={{ width: '70%' }} />
          </li>
          <li className="skill__item">
            Sitecore
            <span className="skill__percentage" style={{ width: '60%' }} />
          </li>
          <li className="skill__item">
            Magento
            <span className="skill__percentage" style={{ width: '50%' }} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Skills;
