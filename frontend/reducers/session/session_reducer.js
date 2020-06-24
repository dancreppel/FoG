import { 
  RECEIVE_CURRENT_USER, 
  REMOVE_CURRENT_USER 
} from '../../actions/session_actions';


const _nullSessionUser = Object.freeze({
  id: null,
  username: null
});

const sessionUserReducer = (state = _nullSessionUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user;
    case REMOVE_CURRENT_USER:
      return _nullSessionUser;
    default:
      return state;
  }
};

export default sessionUserReducer;