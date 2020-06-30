import { RECEIVE_GAMES_GENRES } from '../../actions/games_genres_actions';

const gamesGenresReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_GAMES_GENRES:
      return action.gamesGenres;
    default:
      return state;
  }
};

export default gamesGenresReducer;