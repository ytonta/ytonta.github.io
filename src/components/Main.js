import React, { Component } from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import '../styles/App.css';

class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default Main;
