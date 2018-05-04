import {
  fetchFavorites,
  addFavorite,
  fetchSearchResults,
  deleteFavorite
} from '../../action/place_actions';
import { connect } from 'react-redux';
import PlaceIndex from './place_index';

const mapStateToProps = (state) => {
  let places = state.places;
  let currentUser = state.session.currentUser;

  return {
    currentUser,
    places
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavorites: (id) => dispatch(fetchFavorites(id)),
    addFavorite: (id) => dispatch(addFavorite(id)),
    fetchSearchResults: (query) => dispatch(fetchSearchResults(query)),
    deleteFavorite: (id) => dispatch(deleteFavorite(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceIndex);
