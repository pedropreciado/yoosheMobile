import { login, logout, signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  let errors = state.session.errors;

  return {
    errors
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
