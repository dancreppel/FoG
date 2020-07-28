import * as GameAPIUtil from '../util/games_api_util';
import { receiveErrors } from './errors_actions';
import lodash from "lodash";

export const RECEIVE_GAMES = 'RECEIVE_GAMES';
export const RECEIVE_GAME = 'RECEIVE_GAME';

export const receiveGames = games => ({
  type: RECEIVE_GAMES,
  games
});

export const receiveGame = game => ({
  type: RECEIVE_GAME,
  game
});

// Shuffle the order of games
export const fetchGames = () => dispatch => (
  GameAPIUtil.getGames()
    .then(
      games => dispatch(receiveGames(lodash.shuffle(games))),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const fetchGame = gameId => dispatch => (
  GameAPIUtil.getGame(gameId)
    .then(
      game => dispatch(receiveGame(game)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
);