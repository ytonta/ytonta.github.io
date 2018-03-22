import React, { Component } from 'react';
import Icon from '../Icon';

class Hobbies extends Component {
  render() {
    return (
      <div className="section__hobbies">
        <h2 className="section__title">Hobbies</h2>

        <div className="hobby">
          {Object.keys(this.props).map(key => {
            return (
              <div key={key} className="hobby__item">
                <div className="hobby__logo">
                  <Icon
                    iconName={this.props[key].icon}
                    size={50}
                    className={'hobby__icon'}
                  />
                </div>
                <div className="hobby__title">{this.props[key].title}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Hobbies;
