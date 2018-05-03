import { AsyncStorage } from 'react-native';
import merge from 'lodash/merge';
import axios from 'axios';

export const login = (params) => {
  return axios.post('http://localhost:3001/api/users', params)
}

export const logout = () => {
  return axios.get('http://localhost:3001/logout')
}

export const signup = (params) => {
  return axios.post('http://localhost:3001/api/users', params)
}

export const addLocalUser = (user) => {
  return AsyncStorage.setItem(
    'user',
    JSON.stringify(user),
    (err) => {
      if (err)
      console.log(err)
      return err;

      return 'set';
  })
}

export const fetchLocalUser = () => {
  return AsyncStorage.getItem(
    'user',
    (err, user) => {
      if (err)
      return err;

      return JSON.parse(user);
  })
}
