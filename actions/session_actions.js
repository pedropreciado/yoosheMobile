import * as SessionAPIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = (user) => dispatch => {
  SessionAPIUtil.login(user)
    .then(({ data }) => {
      if (data.errmsg) {
        dispatch(receiveErrors(data.errmsg));
      } else {
        dispatch(receiveCurrentUser(data));
      }
    })
}

export const logout = () => dispatch => {
  SessionAPIUtil.logout()
    .then(dispatch(receiveCurrentUser(null)));
}

export const signup = (user) => dispatch => {
  SessionAPIUtil.signup(user)
    .then(({ data }) => {
      if (data.errmsg) {
        dispatch(receiveErrors(data.errmsg));
      } else {
        dispatch(receiveCurrentUser(data));
      }
    })
}

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const receiveErrors = (err) => ({
  type: RECEIVE_ERRORS,
  err
})
