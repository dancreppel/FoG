import { connect } from 'react-redux';
import GamesIndex from './games_index';
import { fetchGames, updateDiscount } from '../../actions/games_actions';
import lodash from 'lodash';

const MSP =({ entities: { games }}) => ({
  games: lodash.shuffle(games)
});

const MDP = dispatch => ({
  fetchGames: () => dispatch(fetchGames()),
  updateDiscount: (gameId, discount) => dispatch(updateDiscount(gameId, discount))
});

export default connect(MSP, MDP)(GamesIndex);