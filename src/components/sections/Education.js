import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div className="section__education">
        <h2 className="section__title">Education</h2>

        <div className="education">
          <ul className="timeline">
            <li className="timeline__item">
              <span className="timeline__content education__item">
                <span className="education__title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <span className="education__year">2000 - 2000</span>
                <span className="education__place">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </span>
            </li>
            <li className="timeline__item">
              <span className="timeline__content education__item">
                <span className="education__title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <span className="education__year">2000 - 2000</span>
                <span className="education__place">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </span>
            </li>
            <li className="timeline__placeholder" />
          </ul>
        </div>
      </div>
    );
  }
}

export default Education;
