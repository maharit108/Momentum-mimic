import React, { Component } from 'react';
import './styles/App.css';
import Weather from './Components/Weather.js'
import Quotes from './Components/Quotes.js'


class App extends Component {
  render () {
    return (
      <div className="App">
        <Weather />
        <Quotes />
      </div>
    )
  }
}

export default App;
