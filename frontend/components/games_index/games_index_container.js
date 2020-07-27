import { connect } from 'react-redux';
import GamesIndex from './games_index';
import { fetchGames } from '../../actions/games_actions';
import lodash from 'lodash';

// Randomize order of games
const MSP =({ entities: { games }}) => ({
  games: lodash.shuffle(Object.values(games))
});

const MDP = dispatch => ({
  fetchGames: () => dispatch(fetchGames())
});

export default connect(MSP, MDP)(GamesIndex);