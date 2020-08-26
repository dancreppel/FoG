import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener( 'DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let preloadedState = {};
  if (window.currentUser) preloadedState = { sessionUser: currentUser }
  const store = configureStore(preloadedState);
  delete window.currentUser;

  ReactDOM.render(<Root store={store}/>, root)
});