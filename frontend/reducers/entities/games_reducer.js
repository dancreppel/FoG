import {
  RECEIVE_GAMES,
  RECEIVE_GAME,
  RECIEVE_DISCOUNT
} from '../../actions/games_actions';

import { RECEIVE_CART_ITEMS } from "../../actions/cart_actions"

const gamesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_GAMES:
      return action.games;
    case RECEIVE_GAME:
      newState[action.game.id] = action.game;
      return newState;
    case RECIEVE_DISCOUNT:
      newState[action.gameId].discount = action.discount;
      return newState;
    case RECEIVE_CART_ITEMS:
      // Format
      // cart: { 
      //   cartItems: { 1: { gameId: 3, id: 1 } },
      //   games: { 3: { id: 3, title: "Doom Eternal", ...}}
      // }

      // do not replace slice of state otherwise other pages will not work
      let games = Object.values(action.cart.games);
      games.forEach(game => newState[game.id] = game)
      return newState;
    default:
      return state;
  }
}

export default gamesReducer;