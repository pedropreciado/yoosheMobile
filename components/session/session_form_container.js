import { login, logout, signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  let errors = state.session.errors;
  let currentUser = state.session.currentUser;
  let history = ownProps.history;

  return {
    errors,
    currentUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    signup: (user) => dispatch(signup(user))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
