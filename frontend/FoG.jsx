import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// Todo for window testing
import * as SessionActions from './actions/session_actions';

document.addEventListener( 'DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // TODO testing store on window
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  window.testUser = { username: 'dann', password: 'password' };
  window.signup = SessionActions.signup;
  window.login = SessionActions.login;
  window.logout = SessionActions.logout;

  ReactDOM.render(<Root store={store}/>, root)
});