import {getGamesGenres} from "../util/games_genres_api_util";

export const RECEIVE_GAMES_GENRES = "RECEIVE_GENRES";

export const receiveGamesGenres = (gamesGenres) => ({
  type: RECEIVE_GAMES_GENRES,
  gamesGenres,
});

export const fetchGamesGenres = () => (dispatch) => (
  getGamesGenres()
    .then((gamesGenres) => dispatch(receiveGamesGenres(gamesGenres)))
);
