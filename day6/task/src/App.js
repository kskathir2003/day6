 /* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterReducer from './redux';

class App extends Component {
  render() {
    return (
     <CounterReducer/>
    );
  }
}

export default App;
