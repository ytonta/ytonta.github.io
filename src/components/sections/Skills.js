import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="section__skills">
        <h2 className="section__title">Skills</h2>

        <ul className="skill">
          {Object.keys(this.props).map(key => {

            return (
              <li className="skill__item" key={key}>
                <span className="skill__title">{this.props[key].title}</span>
                <span className="skill__details">
                  {this.props[key].details.map(detailItem => {
                    return (
                      <span key={detailItem}>{detailItem}</span>
                    );
                  })}
                </span>
                <span className="skill__percentage" style={{ width: this.props[key].percentage }} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;
