import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import gamesReducer from './games_reducer';
import gamesGenresReducer from './games_genres_reducer';
import genresReducer from './genres_reducer';
import cartReducer from './cart_reducer';
import libraryReducer from "./library_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  games: gamesReducer,
  gamesGenres: gamesGenresReducer,
  genres: genresReducer,
  cart: cartReducer,
  library: libraryReducer
});

export default entitiesReducer;