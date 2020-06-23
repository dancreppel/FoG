import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// Todo for window testing
import * as SessionApiUtil from './util/session_api_util';

document.addEventListener( 'DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // TODO testing store on window
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  window.testUser = { username: 'dan', password: 'password' };
  window.signup = SessionApiUtil.postUser;
  window.login = SessionApiUtil.postSession;
  window.logout = SessionApiUtil.deleteSession;

  ReactDOM.render(<Root store={store}/>, root)
});