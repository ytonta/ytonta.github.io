import React, { Component } from 'react';
import Icon from '../Icon';
import posed from 'react-pose';

const iconProps = {
  open: { scale: 1 },
  closed: { scale: 0 },
};
const achievementProps = {
  open: {
    delayChildren: 100,
    staggerChildren: 250,
  },
  closed: {
    delay: 500,
    staggerChildren: 20,
  },
};
const IconContainer = posed.div(iconProps);
const Achievement = posed.div(achievementProps);

class Achievements extends Component {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          isOpen: !this.state.isOpen,
        }),
      500
    );
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div className="section__achievements">
        <h2 className="section__title">Achievements</h2>

        <Achievement className="achievement" pose={isOpen ? 'open' : 'closed'}>
          {Object.keys(this.props).map(key => {
            return (
              <div key={key} className="achievement__item">
                <IconContainer className="achievement__icon-container">
                  <Icon
                    iconName={this.props[key].icon}
                    size={50}
                    className={'achievement__icon'}
                  />
                </IconContainer>
                <div className="achievement__title">
                  {this.props[key].title}
                </div>
                <div className="achievement__description">
                  {this.props[key].description}
                </div>
              </div>
            );
          })}
        </Achievement>
      </div>
    );
  }
}

export default Achievements;
