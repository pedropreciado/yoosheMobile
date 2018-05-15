import { connect } from 'react-redux';
import { fetchLocalUser } from '../../actions/session_actions';
import Landing from './landing';

const mapStateToProps = (state, { path }) => {
  let currentUser = state.session.currentUser;

  return {
    currentUser,
    path
   };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocalUser: () => dispatch(fetchLocalUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
