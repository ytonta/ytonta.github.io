import React, { Component } from 'react';
import Icon from '../Icon';
import posed from 'react-pose';

const itemProps = {
  open: { scale: 1 },
  closed: { scale: 0 },
};
const hobbyProps = {
  open: {
    delayChildren: 100,
    staggerChildren: 150,
  },
  closed: {
    delay: 500,
    staggerChildren: 20,
  },
};
const Item = posed.div(itemProps);
const Hobby = posed.div(hobbyProps);

class Hobbies extends Component {
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
      <div className="section__hobbies">
        <h2 className="section__title">Hobbies</h2>

        <Hobby className="hobby" pose={isOpen ? 'open' : 'closed'}>
          {Object.keys(this.props).map(key => {
            return (
              <Item key={key} className="hobby__item">
                <div className="hobby__logo">
                  <Icon
                    iconName={this.props[key].icon}
                    size={50}
                    className={'hobby__icon'}
                  />
                </div>
                <div className="hobby__title">{this.props[key].title}</div>
              </Item>
            );
          })}
        </Hobby>
      </div>
    );
  }
}

export default Hobbies;
