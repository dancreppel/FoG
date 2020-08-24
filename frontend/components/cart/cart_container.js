import { connect } from 'react-redux';
import Cart from './cart';
import { 
  fetchCartItems, 
  deleteCartItem 
} from "../../actions/cart_actions";
import { fetchGenres } from '../../actions/genres_actions';
import { fetchGamesGenres } from '../../actions/games_genres_actions';

const MSP = ({ entities: { cart, games } }) => ({
  cart,
  games
});

const MDP = (dispatch) => ({
  getUserCart: () => dispatch(fetchCartItems()),
  removeCartItem: (id) => dispatch(deleteCartItem(id)),
  fetchGamesGenres: () => dispatch(fetchGamesGenres()),
  fetchGenres: () => dispatch(fetchGenres()),
});

export default connect(MSP, MDP)(Cart);