import {
  RECEIVE_LIBRARY,
  RECEIVE_LIBRARY_ITEM,
  REMOVE_LIBRARY_ITEM
} from "../../actions/library_actions";

const libraryReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_LIBRARY:
      if (action.library.libraryItems) return action.library.libraryItems;
      else return state;
    case RECEIVE_LIBRARY_ITEM:
      newState[action.libraryItem.id] = action.libraryItem;
      return newState;
    case REMOVE_LIBRARY_ITEM:
      if (action.libraryItemId === 'all') return {};

      delete newState[action.libraryItemId];
      return newState
    default:
      return state;
  }
}

export default libraryReducer;