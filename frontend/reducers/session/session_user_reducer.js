import { 
  RECEIVE_CURRENT_USER, 
  REMOVE_CURRENT_USER 
} from '../../actions/session_actions';

const sessionUserReducer = (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user;
    case REMOVE_CURRENT_USER:
      return null;
    default:
      return state;
  }
};

export default sessionUserReducer;