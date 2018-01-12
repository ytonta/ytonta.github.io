import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/App.css';

class Main extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />

        <img alt='twerk' src='https://goo.gl/cuyRLu' />

        <Footer />
      </div>
    );
  }
}

export default Main;
