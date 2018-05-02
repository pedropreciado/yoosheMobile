const axios = require('axios');

export const login = (params) => {
  return axios.post('http://localhost:3001/api/users', params)
}

export const logout = () => {
  return axios.get('http://localhost:3001/logout')
}

export const signup = (params) => {
  return axios.post('http://localhost:3001/api/users', params)
}
