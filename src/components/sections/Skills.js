import React, { Component } from 'react';
import posed from 'react-pose';

const skillProps = {
  open: { width: '100%' },
  closed: { width: '0%' },
};

const Skill = posed.span(skillProps);

class Skills extends Component {
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
      <div className="section__skills">
        <h2 className="section__title">Skills</h2>

        <ul className="skill">
          {Object.keys(this.props).map(key => {
            return (
              <li className="skill__item" key={key}>
                <span className="skill__title">{this.props[key].title}</span>
                <span className="skill__details">
                  {this.props[key].details.map(detailItem => {
                    return <span key={detailItem}>{detailItem}</span>;
                  })}
                </span>

                <span
                  className="skill__percentage-container"
                  style={{ width: this.props[key].percentage }}
                >
                  <Skill
                    className="skill__percentage"
                    pose={isOpen ? 'open' : 'closed'}
                  />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;
