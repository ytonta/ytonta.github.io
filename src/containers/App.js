import React, { Component } from 'react';
import Anime from 'react-anime';
import Header from '../components/Header';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Anime delay={(e, i) => i * 1000}
               scale={[0, .9]}>
          <div className="blue"/>
          <div className="green"/>
          <div className="red"/>
        </Anime>
        <p>container</p>
      </div>
    );
  }
}

export default App;
