import React, { Component } from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import '../styles/App.css';

class Main extends Component {
  render() {
    console.log('main', this);
    return (
      <div className="wrapper">
        <Header />
        <Section />
        <Footer />
        {this.props.children}
      </div>
    );
  }
}

export default Main;
