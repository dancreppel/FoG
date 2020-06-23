import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener( 'DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // TODO testing store on window
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  ReactDOM.render(<Root store={store}/>, root)
});