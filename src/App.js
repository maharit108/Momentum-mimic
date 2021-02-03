import React, { Component } from 'react';
import { getImg } from './ApiCalls/apiCall.js'

import Time from './Components/Time.js'
import Weather from './Components/Weather.js'
import Quotes from './Components/Quotes.js'

class App extends Component {
  constructor () {
    super()
    // State with data for background image request to Unsplash API
    this.state = {
      imgUrl: '',
      // access key from Unsplash API here
      imgApiId: process.env.REACT_APP_UNSPLASH_ACCESS
    }
  }
  componentDidMount () {
    getImg(this.state.imgApiId)
      .then(res => this.setState({imgUrl: res.data.urls.regular}))
      .catch(console.error)
  }
  render () {
    // styling for main view
    const mainStyle = {
      alignItems: 'center',
      backgroundImage: `url(${this.state.imgUrl})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      height:'100vh',
      justifyContent: 'space-between',
      textAlign: 'center'
    }
    return (
      <div style={mainStyle}>
        <Weather />
        <Time />
        <Quotes />
      </div>
    )
  }
}

export default App;
