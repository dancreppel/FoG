import { connect } from 'react-redux';
import GamesShow from './games_show';
import { fetchGame } from '../../actions/games_actions';
import genresForGame from '../../selectors/games_genres';

const MSP = ({ entities: { games, genres, gamesGenres } }, ownProps ) => ({
  game: games[ownProps.match.params.id],
  genres: genresForGame(genres, gamesGenres, ownProps.match.params.id)
})

const MDP = dispatch => ({
  fetchGame: gameId => dispatch(fetchGame(gameId))
});

export default connect(MSP, MDP)(GamesShow);