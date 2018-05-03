import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (oldState = { currentUser: null, errors: '' }, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { currentUser: action.currentUser } );
    case RECEIVE_ERRORS:
      return merge({}, oldState, { err: action.err });
    default:
      return oldState;
  }
}

export default SessionReducer;
