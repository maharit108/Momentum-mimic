import axios from 'axios'

// get request to  Open Weather API to get current weather of given city.
export const getWeatherByCity = temp => {
  return axios({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${temp.cityName}&units=imperial&appid=${temp.weatherkey}`,
    method: 'GET'
  })
}

// get request to  Open Weather API to get current weather of given coordinate.
export const getWeatherByLat = temp => {
  return axios({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${temp.lat}&lon=${temp.lon}&units=imperial&appid=${temp.weatherkey}`,
    method: 'GET'
  })
}

// get request to  Open Weather API to get current weather of given coordinate.
export const getCity = temp => {
  return axios({
    url: `https://us1.locationiq.com/v1/reverse.php?key=${temp.locationKey}&lat=${temp.lat}&lon=${temp.long}&format=json`,
    method: 'GET'
  })
}

// get request to Forismatic API  to get random quotes
export const getQuotes = () => {
  return axios({
    url: 'https://type.fit/api/quotes',
    method: 'GET'
  })
}

// get request to Unsplash API to get random images for background images
export const getImg = (imgApiId) => {
  return axios({
    url: `https://api.unsplash.com/photos/random?client_id=${imgApiId}&orientation=landscape&query=dark-background`,
    method: 'GET'
  })
}
