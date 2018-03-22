import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div className="section__experience">
        <h2 className="section__title">Experience</h2>

        <div className="experience">
          <ul className="timeline">
            {Object.keys(this.props).map(key => {
              return (
                <li className="timeline__item" key={key}>
                  <span className="timeline__content experience__item">
                    <span className="experience__company">
                      {this.props[key].company}
                    </span>
                    <span className="experience__year">
                      {this.props[key].year}
                    </span>
                    <span className="experience__position">
                      {this.props[key].position}
                    </span>
                    <ul className="experience__description">
                      {this.props[key].description.map((descriptionItem, index) => {
                        return (
                          <li
                            className="experience__description__item"
                            key={`${key}-description${index}`}
                          >
                            {descriptionItem}
                          </li>
                        );
                      })}
                    </ul>
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

export default Experience;
