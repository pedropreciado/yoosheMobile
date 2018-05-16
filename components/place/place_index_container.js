import {
  fetchFavorites,
  addFavorite,
  fetchSearchResults,
  deleteFavorite
} from '../../actions/place_actions';
import { connect } from 'react-redux';
import PlaceIndex from './place_index';

const mapStateToProps = (state) => {
  // console.log("\x1b[32m", state.places, "\x1b[31m");
  let places = state.places
  ? Object.keys(state.places).map((id) => { return state.places[id] })
  : [];
  let currentUser = state.session.currentUser;

  return {
    currentUser,
    places: places.sort((a, b) => {
      if (!a.isOpen) {
        return 1;
      } else if (!b.isOpen) {
        return -1;
      }
      return b.busyPercentage - a.busyPercentage
    }),
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
