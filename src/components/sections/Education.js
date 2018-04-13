import React, { Component } from 'react';
import Timeline from './Timeline';
import Item from './Item';

class Education extends Component {
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
      <div className="section__education">
        <h2 className="section__title">Education</h2>

        <div className="education">
          <Timeline className="timeline" pose={isOpen ? 'open' : 'closed'}>
            {Object.keys(this.props).map(key => {
              return (
                <li className="timeline__item" key={key}>
                  <Item className="timeline__content education__item">
                    <span className="education__title">
                      {this.props[key].title}
                    </span>
                    <span className="education__year">
                      {this.props[key].year}
                    </span>
                    <span className="education__place">
                      {this.props[key].place}
                    </span>
                  </Item>
                </li>
              );
            })}
            <li className="timeline__placeholder" />
          </Timeline>
        </div>
      </div>
    );
  }
}

export default Education;
