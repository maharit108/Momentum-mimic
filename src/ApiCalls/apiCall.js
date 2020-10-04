import axios from 'axios'

export const getWeather = temp => {
  return axios({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${temp.cityName}&units=imperial&appid=${temp.weatherkey}`,
    method: 'GET'
  })
}

export const getQuotes = () => {
  return axios({
    // add proxy=>https://cors-anywhere.herokuapp.com/ to add CORS header to request, to avoid CORS error.
    url: 'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en',
    method: 'GET'
  })
}
