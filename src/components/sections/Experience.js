import React, { Component } from 'react';
import Timeline from './Timeline';
import Item from './Item';

class Experience extends Component {
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
      <div className="section__experience">
        <h2 className="section__title">Experience</h2>

        <div className="experience">
          <Timeline className="timeline" pose={isOpen ? 'open' : 'closed'}>
            {Object.keys(this.props).map(key => {
              return (
                <li className="timeline__item" key={key}>
                  <Item className="timeline__content experience__item">
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
                      {this.props[key].description.map(
                        (descriptionItem, index) => {
                          return (
                            <li
                              className="experience__description__item"
                              key={`${key}-description${index}`}
                            >
                              {descriptionItem}
                            </li>
                          );
                        }
                      )}
                    </ul>
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

export default Experience;
