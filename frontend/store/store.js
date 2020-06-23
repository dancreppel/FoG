import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import logger from 'react-logger';
import rootReducer from '../reducers/';

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

export default configureStore;