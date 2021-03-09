import React, { Component } from 'react';

import { getWeatherByCity, getWeatherByLat, getCity } from './../ApiCalls/apiCall.js'
import './../styles/weather.css'

// Weather Component to show current weather for the day.
class Weather extends Component {
  constructor () {
    super()
    this.state = {
      cityName: '',
      lat: null,
      lon: null,
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

  // permission to get geoLocation granted
  geoGranted = (loc) => {
    // Change state to current latitude and longitude
    this.setState({lat: Math.floor(loc.coords.latitude), lon: Math.floor(loc.coords.longitude)}, () => {
  
      // payload
      let sendData = {
        weatherkey: this.state.weatherkey,
        lat: this.state.lat,
        lon: this.state.lon
      }
      // get weather data API call
      getWeatherByLat(sendData)
        .then(res => {
          this.setState({temp: res.data.main.temp, climate: res.data.weather[0].main})
        })
        .catch(console.error)
    })

    // get city name from LocationIQ Api corresponding to current location
    let getCityData = {
      locationKey: process.env.REACT_APP_LOC_KEY,
      lat: loc.coords.latitude,
      long: loc.coords.longitude
    }
    getCity(getCityData)
      .then(res => this.setState({cityName: res.data.address.city}))
      .catch(console.error)
  }

  // if geoLocation is not available or permission denied
  locationDenied = () => {
    let cityInput = prompt('Enter the city you are in: ', 'Chicago')
    this.setState({cityName: cityInput})
    let sendData = {
      weatherkey: this.state.weatherkey,
      cityName: this.state.cityName
    }
    getWeatherByCity(sendData)
      .then(res => this.setState({temp: res.data.main.temp, climate: res.data.weather[0].main}))
      .catch(console.error)
  }

  // geoLocation Error
  geoError = (err) => {
    console.log('Error:', err)
    this.locationDenied()
  }

  componentDidMount () {
    // Geolocation API
    if(navigator.geolocation) {
      navigator.permissions
          .query({ name: 'geolocation' })
          .then((res) => {
              if (res.state === 'granted') {
                  navigator.geolocation.getCurrentPosition(this.geoGranted)
              } else if (res.state === 'prompt') {
                  navigator.geolocation.getCurrentPosition(this.geoGranted, this.geoError, this.state.geoOption)
              } else if (res.state === 'denied') {
                  console.log('Location Permission Denied')
                  this.locationDenied()
              }
          })
    } else {
      console.log('geoLocation feature not available')
      this.locationDenied()
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
