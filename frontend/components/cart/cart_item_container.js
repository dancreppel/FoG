import { connect } from 'react-redux';
import CartItem from './cart_item';
import { deleteCartItem } from "../../actions/cart_actions";

const MSP = ({ entities: { genres, gamesGenres } }) => ({
  genres,
  gamesGenres
});

const MDP = (dispatch) => ({
  removeCartItem: (id) => dispatch(deleteCartItem(id)),
});

export default connect(MSP, MDP)(CartItem);