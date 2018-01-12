import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/App.css';

class Main extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />

        <div className='blue' />
        <div className='green' />
        <div className='red' />

        <Footer />
      </div>
    );
  }
}

export default Main;
