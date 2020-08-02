import { connect } from 'react-redux';
import GamesIndex from './games_index';
import { fetchGames, updateDiscount } from '../../actions/games_actions';

const MSP =({ entities: { games }}) => ({
  games: Object.values(games)
});

const MDP = dispatch => ({
  fetchGames: () => dispatch(fetchGames()),
  updateDiscount: (gameId, discount) => dispatch(updateDiscount(gameId, discount))
});

export default connect(MSP, MDP)(GamesIndex);