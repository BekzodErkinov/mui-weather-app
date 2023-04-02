import axios from 'axios'

const accessToken = window.localStorage.getItem('sessionToken')

// Auth API - reqres.in
const request = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    token: accessToken ? accessToken : ''
  }
})


// API - openweathermap.org
const API_KEY = '88310a2439490435c66e8fe2a1e24fcc'
const API_URL = 'http://api.openweathermap.org/data/2.5/weather'

export const getWeather = async (city, country) => {
  try {
    let response = await axios.get(`${API_URL}?q=${city},country='${country}'&appid=${API_KEY}&units=metric`)
    return response.data
  } catch (error) {
    console.log('Error while calling the API', error.message)
    return error.response
  }
}

export default request
