import React, { Component } from 'react';
import { FaHeadphones, FaCode, FaGamepad } from 'react-icons/lib/fa';

class Hobbies extends Component {
  render() {
    return (
      <div className="section__hobbies">
        <h2 className="section__title">Hobbies</h2>

        <div className="hobby">
          <div className="hobby__item">
            <div className="hobby__logo">
              <FaHeadphones size="50" className="hobby__icon" />
            </div>
            <div className="hobby__title">Music</div>
          </div>
          <div className="hobby__item">
            <div className="hobby__logo">
              <FaCode size="50" className="hobby__icon" />
            </div>
            <div className="hobby__title">Coding</div>
          </div>
          <div className="hobby__item">
            <div className="hobby__logo">
              <FaGamepad size="50" className="hobby__icon" />
            </div>
            <div className="hobby__title">Gaming</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hobbies;
