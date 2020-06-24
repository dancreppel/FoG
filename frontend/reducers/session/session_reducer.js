import { 
  RECEIVE_CURRENT_USER, 
  REMOVE_CURRENT_USER 
} from '../../actions/session_actions';


const _nullSession = Object.freeze({
  currentUserId: null
});

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  let newState = Object({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger;
      newState.currentUserId = action.user.id;
      return newState;
    case REMOVE_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};

export default sessionReducer;