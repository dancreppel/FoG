import { connect } from 'react-redux';
import GamesIndex from './games_index';
import { fetchGames } from '../../actions/games_actions';

const MSP = state => ({
  games: Object.values(state.games)
});

const MDP = dispatch => ({
  fetchGames: () => dispatch(fetchGames())
});

export default connect(MSP, MDP)(GamesIndex);