import {
  RECEIVE_CURRENT_USER,
  REMOVE_CURRENT_USER
} from '../../actions/session_actions';


const _nullSession = {
  currentUserId: null
}

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  let newState = Object({}, state);

  switch (action.state) {
    case RECEIVE_CURRENT_USER:
      newState.currentUserId = action.user.id;
      return newState;
    case REMOVE_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};

export default sessionReducer;