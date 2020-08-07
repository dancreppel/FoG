import * as CartApiUtil from '../util/cart_items_api_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

const receiveCartItems = (cart) => ({
  type: RECEIVE_CART_ITEMS,
  cart
});

const receiveCartItem = (cartItem) => ({
  type: RECEIVE_CART_ITEM,
  cartItem
});

const removeCartItem = (cartItemId) => ({
  type: REMOVE_CART_ITEM,
  cartItemId
});

export const fetchCartItems = () => dispatch => (
  CartApiUtil.getCartItems()
    .then(
      cartItems => dispatch(receiveCartItems(cartItems)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const createCartItem = gameId => dispatch => (
  CartApiUtil.postCartItem(gameId)
    .then(
      cartItem => dispatch(receiveCartItem(cartItem)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const deleteCartItem = cartItemId => dispatch => (
  CartApiUtil.deleteCartItem(cartItemId)
    .then(
      () => dispatch(removeCartItem(cartItemId)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);