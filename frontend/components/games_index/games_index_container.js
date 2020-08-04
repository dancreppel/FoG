import { connect } from 'react-redux';
import GamesIndex from './games_index';
import { fetchGames } from '../../actions/games_actions';
import lodash from 'lodash';

const MSP =({ entities: { games }}) => ({
  games: lodash.shuffle(games)
});

const MDP = dispatch => ({
  fetchGames: () => dispatch(fetchGames()),
});

export default connect(MSP, MDP)(GamesIndex);