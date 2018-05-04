import * as PlaceAPIUtil from '../utils/place_api_util';

export const RECEIVE_FAVORITE_PLACES = 'RECEIVE_FAVORITE_PLACES';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_FAVORITE_PLACE = 'RECEIVE_FAVORITE_PLACE';
export const REMOVE_FAVORITE_PLACE = 'REMOVE_FAVORITE_PLACE';

export const fetchFavorites = (id) => dispatch => {
  PlaceAPIUtil.fetchFavorites(id)
    .then(({ data }) => {
      dispatch(receiveFavoritePlaces(data))
    })
}

export const addFavorite = (id) => dispatch => {
  PlaceAPIUtil.addFavorite(id)
    .then(({ data }) => {
      dispatch(receiveFavoritePlaces(data))
    })
}

export const deleteFavorite = (id) => dispatch => {
  PlacesAPIUtil.deleteFavorite(id).then(({ data }) => {
    dispatch(removeFavoritePlace(data));
  })
}

export const fetchSearchResults = (query) => dispatch => {
  PlaceAPIUtil.fetchSearchResults(query)
    .then(({ data }) => {
      dispatch(receiveSearchResults(data))
    })
}

export const refresh = (id) => dispatch => {
  PlaceAPIUtil.refresh(id)
    .then(({ data }) => {
      dispatch(receiveFavoritePlace(data))

      PlaceAPIUtil.fetchFavorites(data.userId)
        .then(({ data }) => {
          dispatch(receiveFavoritePlaces(data))
        })
    })
}

const receiveFavoritePlaces = (places) => {
  type: RECEIVE_FAVORITE_PLACES,
  places
}

const receiveFavoritePlace = (place) => {
  type: RECEIVE_FAVORITE_PLACE,
  place
}

const receiveSearchResults = (results) => {
  type:RECEIVE_SEARCH_RESULTS,
  place
}

const removeFavoritePlace = (place) => ({
  type: REMOVE_FAVORITE_PLACE,
  place
})
