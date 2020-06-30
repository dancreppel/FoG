import { connect } from 'react-redux';
import GamesShow from './games_show';
import { fetchGame } from '../../actions/games_actions';

const MSP = ({ entities: { games } }, ownProps ) => ({
  game: games[ownProps.match.params.id]
})

const MDP = dispatch => ({
  fetchGame: gameId => dispatch(fetchGame(gameId))
});

export default connect(MSP, MDP)(GamesShow);