import {
  RECEIVE_GAMES,
  RECEIVE_GAME,
  RECIEVE_DISCOUNT
} from '../../actions/games_actions';

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
    default:
      return state;
  }
}

export default gamesReducer;