import { combineReducers } from 'redux';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer
});

export default errorsReducer;