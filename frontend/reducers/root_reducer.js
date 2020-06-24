import { combineReducers } from 'redux';
import entitiesReducer from './entities/entities_reducer';
import errorsReducer from './errors/errors_reducer';
import sessionUserReducer from './session/session_user_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  sessionUser: sessionUserReducer
});

export default rootReducer;