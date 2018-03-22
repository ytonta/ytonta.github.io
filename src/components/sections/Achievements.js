import React, { Component } from 'react';
import Icon from '../Icon';

class Achievements extends Component {
  render() {
    return (
      <div className="section__achievements">
        <h2 className="section__title">Achievements</h2>

        <div className="achievement">
          {/* IEEE publication, INNOV8 competition */}
          {Object.keys(this.props).map(key => {
            return (
              <div key={key} className="achievement__item">
                <div className="achievement__icon-container">
                  <Icon iconName={this.props[key].icon} size={50} className={'achievement__icon'} />
                </div>
                <div className="achievement__title">
                  {this.props[key].title}
                </div>
                <div className="achievement__description">
                  {this.props[key].description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Achievements;
