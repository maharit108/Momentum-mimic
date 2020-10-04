import axios from 'axios'

export const getWeather = temp => {
  return axios({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${temp.cityName}&units=imperial&appid=${temp.weatherkey}`,
    method: 'GET'
  })
}
