import axios from 'axios'

// get request to  Open Weather API to get current weather of given city.
export const getWeather = temp => {
  return axios({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${temp.cityName}&units=imperial&appid=${temp.weatherkey}`,
    method: 'GET'
  })
}

// get request to Forismatic API  to get random quotes
export const getQuotes = () => {
  return axios({
    // add proxy=>https://cors-anywhere.herokuapp.com/ to add CORS header to request, to avoid CORS error.
    url: 'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en',
    method: 'GET'
  })
}

// get request to Unsplash API to get random images for background images
export const getImg = (imgApiId) => {
  return axios({
    url: `https://api.unsplash.com/photos/random?client_id=${imgApiId}`,
    method: 'GET'
  })
}
