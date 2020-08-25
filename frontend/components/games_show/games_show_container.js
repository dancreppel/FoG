import { connect } from 'react-redux';
import GamesShow from './games_show';
import { fetchGame } from '../../actions/games_actions';
import { genresForGame } from '../../selectors/games_genres';
import { fetchGenres } from '../../actions/genres_actions';
import { fetchGamesGenres } from '../../actions/games_genres_actions';
import { fetchCartItems } from '../../actions/cart_actions';


const MSP = ({ entities: { games, genres, gamesGenres } }, ownProps ) => {
  return {
    game: games[ownProps.match.params.id],
    genres: genresForGame(genres, gamesGenres, ownProps.match.params.id)
  }
}

const MDP = dispatch => ({
  fetchGame: gameId => dispatch(fetchGame(gameId)),
  fetchGenres: () => dispatch(fetchGenres()),
  fetchGamesGenres: () => dispatch(fetchGamesGenres()),
  fetchCartItems: () => dispatch(fetchCartItems())
});

export default connect(MSP, MDP)(GamesShow);