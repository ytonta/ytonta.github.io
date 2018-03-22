import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div className="section__education">
        <h2 className="section__title">Education</h2>

        <div className="education">
          <ul className="timeline">
            {Object.keys(this.props).map(key => {
              return (
                <li className="timeline__item" key={key}>
                  <span className="timeline__content education__item">
                    <span className="education__title">
                      {this.props[key].title}
                    </span>
                    <span className="education__year">
                      {this.props[key].year}
                    </span>
                    <span className="education__place">
                      {this.props[key].place}
                    </span>
                  </span>
                </li>
              );
            })}
            <li className="timeline__placeholder" />
          </ul>
        </div>
      </div>
    );
  }
}

export default Education;
