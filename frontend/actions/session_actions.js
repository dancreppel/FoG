import * as SessionApiUtil from '../util/session_api_util';
import { receiveErrors } from './errors_actions';

// action types
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

// action creators
export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

// thunk action creators
export const signup = user => dispatch => (
  SessionApiUtil.postUser(user)
    .then(
      createdUser => dispatch(receiveCurrentUser(createdUser)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const login = user => dispatch => (
  SessionApiUtil.postSession(user)
    .then(
      loggedInUser => dispatch(receiveCurrentUser(loggedInUser)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const logout = () => dispatch => (
  SessionApiUtil.deleteSession()
    .then(
      () => dispatch(removeCurrentUser()),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const guestLogin = () => dispatch => {
  let guest = { username: 'guest', password: 'password' };
  return SessionApiUtil.postSession(guest)
    .then(
      (loggedInUser) => dispatch(receiveCurrentUser(loggedInUser)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
};