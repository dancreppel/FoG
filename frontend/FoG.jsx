import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as CartActions from "./actions/cart_actions"

document.addEventListener( 'DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let preloadedState = {};
  if (window.currentUser) preloadedState = { sessionUser: currentUser }
  const store = configureStore(preloadedState);
  delete window.currentUser;

  // TODO TEST CART REDUCER WITH THIS
  window.dispatch = store.dispatch;
  window.fetchCartItems = CartActions.fetchCartItems;
  window.createCartItem = CartActions.createCartItem;
  window.deleteCartItem = CartActions.deleteCartItem;

  ReactDOM.render(<Root store={store}/>, root)
});