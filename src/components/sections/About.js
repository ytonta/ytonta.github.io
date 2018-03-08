import React, { Component } from 'react';

class About extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="section__about">
        <h2 className="section__title">About</h2>

        <div className="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi
          corporis facere, et consequuntur fugiat consequatur molestias ipsa
          amet sed dolore quibusdam ad! Ad quo fugit et numquam.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Commodi quasi corporis
          facere, et consequuntur fugiat consequatur molestias ipsa amet sed
          dolore quibusdam ad! Ad quo fugit et numquam.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Commodi quasi corporis facere, et
          consequuntur fugiat consequatur molestias ipsa amet sed dolore
          quibusdam ad! Ad quo fugit et numquam.
        </div>
      </div>
    );
  }
}

export default About;
