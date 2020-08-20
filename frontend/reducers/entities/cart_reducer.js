import { 
  RECEIVE_CART_ITEMS,
  RECEIVE_CART_ITEM,
  REMOVE_CART_ITEM
} from "../../actions/cart_actions";

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_CART_ITEMS:
      // Format
      // cart: { 
      //   cartItems: { 1: { gameId: 3, id: 1 } },
      //   games: { 3: { id: 3, title: "Doom Eternal", ...}}
      // }
      return action.cart.cartItems;
    case RECEIVE_CART_ITEM:
      // Do it this way be cause the format of the cartItem is as follows:
      // action.cartItem: { 39: { gameId: 3, id: 39 }}
      newState = Object.assign(newState, action.cartItem)
      return newState;
    case REMOVE_CART_ITEM: 
      delete newState[action.cartItemId]
      return newState;
    default:
      return state;
  }
}

export default cartReducer