import React, { Component } from 'react';
import {
  FaTrophy,
  FaBook,
} from 'react-icons/lib/fa';

class Achievements extends Component {
  render() {
    return (
      <div className="section__achievements">
        <h2 className="section__title">Achievements</h2>

        <div className="achievement">
          {/* IEEE publication, INNOV8 competition */}
          <div className="achievement__item">
            <div className="achievement__icon-container">
              <FaTrophy size="50" className="achievement__icon" />
            </div>
            <div className="achievement__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="achievement__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="achievement__item">
            <div className="achievement__icon-container">
              <FaBook size="50" className="achievement__icon" />
            </div>
            <div className="achievement__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="achievement__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Achievements;
