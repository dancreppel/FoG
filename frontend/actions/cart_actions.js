import * as CartApiUtil from '../util/cart_items_api_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

const receiveCartItems = (cartItems) => ({
  type: RECEIVE_CART_ITEMS,
  cartItems
})

const receiveCartItem = (cartItem) => ({
  type: RECEIVE_CART_ITEM,
  cartItem
})

const removeCartItem = (cartItemId) => ({
  type: REMOVE_CART_ITEM,
  cartItemId
})

export const fetchCartItems = () => dispatch => (
  CartApiUtil.getCartItems()
    .then(
      cartItems => dispatch(receiveCartItems(cartItems)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
)