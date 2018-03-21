import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="section__about">
        <h2 className="section__title">About</h2>

        <div className="about">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default About;
