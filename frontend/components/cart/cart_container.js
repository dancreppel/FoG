import { connect } from 'react-redux';
import Cart from './cart';
import { 
  fetchCartItems, 
  deleteCartItem 
} from "../../actions/cart_actions";

const MSP = ({ entities: { cart, games } }) => ({
  cart,
  games
});

const MDP = (dispatch) => ({
  getUserCart: () => dispatch(fetchCartItems()),
  removeCartItem: (id) => dispatch(deleteCartItem(id))
});

export default connect(MSP, MDP)(Cart);