import React, { Component } from 'react';

import { getWeather } from './../ApiCalls/apiCall.js'
import './../styles/weather.css'

// Weather Component to show current weather for the day.
class Weather extends Component {
  constructor () {
    super()
    this.state = {
      // data for API request
      sendData:{
        cityName: 'Chicago',
        weatherkey: 'ee0b3bebd948b8d6f846ca3895a91c64'
      },
      icons: {
        clear: '☀',
        rain: '️🌧',
        storm: '⛈',
        snow: '🌨',
        mist: '🌫',
        clouds: '☁',
      },
      temp: '',
      climate: ''
    }
  }

  componentDidMount () {
    getWeather(this.state.sendData)
      .then(res => this.setState({temp: res.data.main.temp, climate: res.data.weather[0].main}))
      .catch(console.error)
  }

  render () {
    // select icon as per weather update
    const { temp, climate, sendData, icons } = this.state
    let weatherIcon = ''
    if (climate === 'Clear') {
      weatherIcon = icons.clear
    } else if (climate === 'Rain' || climate === 'Drizzle') {
      weatherIcon = icons.rain
    } else if (climate === 'Thunderstorm') {
      weatherIcon = icons.rain
    } else if (climate === 'Snow') {
      weatherIcon = icons.snow
    } else if (climate === 'Clouds') {
      weatherIcon = icons.clouds
    } else {
      weatherIcon = icons.mist
    }
    return (
      <header className='rtTop'>
        <h3 className='mdTemp'>{weatherIcon} {temp}{'\u00b0'}F</h3>
        <h3 className='smTemp'>{sendData.cityName}</h3>
      </header>
    )
  }

}

export default Weather
