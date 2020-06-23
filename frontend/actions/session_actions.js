import * as SessionApiUtil from '../util/session_api_util';

// action types
export const RECEIVE_CURRENT_USER = 'RECEIVE_ CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// action creators
export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

// thunk action creators
export const signup = user => dispatch => (
  SessionApiUtil.postUser(user)
    .then(
      createdUser => dispatch(receiveCurrentUser(createdUser)),
      errors => dispatch(receiveErrors(errors))
    )
);

export const login = user => dispatch => (
  SessionApiUtil.postSession(user)
    .then(
      loggedInUser => dispatch(receiveCurrentUser(loggedInUser)),
      errors => dispatch(receiveErrors(errors))
    )
);

export const logout = () => dispatch => (
  SessionApiUtil.deleteSession()
    .then(
      () => dispatch(removeCurrentUser()),
      errors => dispatch(receiveErrors(errors))
    )
);