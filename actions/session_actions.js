import * as SessionAPIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const fetchLocalUser = () => dispatch => {
  SessionAPIUtil.fetchLocalUser()
    .then((user) => {
      dispatch(receiveCurrentUser(JSON.parse(user)))
    })
    .catch((err) => {
      dispatch(receiveErrors(err))
    })
}

export const login = (user) => dispatch => {
  SessionAPIUtil.login(user)
    .then(({ data }) => {
      if (data.errmsg) {
        dispatch(receiveErrors(data.errmsg));
      } else {
        dispatch(receiveCurrentUser(data));

        SessionAPIUtil.addLocalUser(data)
          .then((user) => {
            console.log('added!');
            return;
          })
          .catch((err) => {
            dispatch(receiveErrors(err))
          })
      }
    })
    .catch((err) => {
      console.log(err);
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

        SessionAPIUtil.addLocalUser(data)
          .then((user) => {
            return;
          })
          .catch((err) => {
            dispatch(receiveErrors(err))
          })
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
