const axios = require('axios');



let favoritesRoute = 'http://localhost:3001/api/favorites?';
let placesRoute = 'http://localhost:3001/api/places?';
let refreshRoute = 'http://localhost:3001/api/refresh?';

export const fetchFavorites = (id) => {
  return axios.get(
    favoritesRoute +
    `userId=${id}`
  )
}

export const addFavorite = (place) => {
  return axios.get(
    favoritesRoute +
    `placeid=${place.placeid}` +
    `userId=${place.userId}`
  )
}

export const deleteFavorite = (id) => {
  return axios.delete(
    favoritesRoute +
    `id=${id}`
  )
}

export const fetchSearchResults = (query) => {
  let name = query.name.split(' ').join('+');
  let location = query.location.split(' ').join;

  return axios.get(
    placesRoute +
    `name=${name}&` +
    `location=${location}`
  )
}

export const refresh = (id) => {
  return axios.get(
    refreshRoute +
    `id=${id}`
  )
}
