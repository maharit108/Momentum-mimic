import React, { Component } from 'react';

import { getWeatherByCity, getWeatherByLat } from './../ApiCalls/apiCall.js'
import './../styles/weather.css'

// Weather Component to show current weather for the day.
class Weather extends Component {
  constructor () {
    super()
    this.state = {
      // data for API request
      cityName: 'Chicago',
      lat: null,
      lon: null,
      // access key from Open weather API here
      weatherkey: process.env.REACT_APP_WEATHERMAP_KEY,
      icons: {
        clear: '☀',
        rain: '️🌧',
        storm: '⛈',
        snow: '🌨',
        mist: '🌫',
        clouds: '☁',
      },
      temp: '',
      climate: '',
      geoOption: {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
      }
    }
  }

  geoGranted = (loc) => {
    this.setState({lat: Math.floor(loc.coords.latitude), lon: Math.floor(loc.coords.longitude)}, () => {
      let sendData = {
        weatherkey: this.state.weatherkey,
        lat: this.state.lat,
        lon: this.state.lon
      }
      console.log('loc', loc)
      getWeatherByLat(sendData)
      .then(res => {
        this.setState({temp: res.data.main.temp, climate: res.data.weather[0].main})
      })
      .catch(console.error)
    })
  }

  setCity = (cityName) => {
    this.setState({cityName: cityName})
  }

  geoError = (err) => {
    console.log('error', err)
  }

  componentDidMount () {

    if(navigator.geolocation) {
      navigator.permissions
          .query({ name: 'geolocation' })
          .then((res) => {
              if (res.state === 'granted') {
                  console.log(res.state)
                  navigator.geolocation.getCurrentPosition(this.geoGranted)
              } else if (res.state === 'prompt') {
                  navigator.geolocation.getCurrentPosition(this.geoGranted, this.geoError, this.state.geoOption)
              } else if (res.state === 'denied') {
                  console.log('denied')
              }
              res.onChange = () => {
                  console.log('res Change', res.state)
              }
          })

    } else {
      console.log('geoLocation feature not available')
      // getWeatherByCity(this.state.sendData)
      //   .then(res => this.setState({temp: res.data.main.temp, climate: res.data.weather[0].main}))
      //   .catch(console.error)
    }

  }

  render () {
    // select icon as per weather update
    const { temp, climate, cityName, icons } = this.state
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
        <h3 className='smTemp'>{cityName}</h3>
      </header>
    )
  }

}

export default Weather
