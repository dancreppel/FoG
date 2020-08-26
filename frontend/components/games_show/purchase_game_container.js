import { connect } from 'react-redux'
import PurchaseGame from './purchase_game';
import { createCartItem } from "../../actions/cart_actions";
import { createLibraryItem } from '../../actions/library_actions';

const MSP = ({ sessionUser, entities: { cart } } ) => ({
  cart: Object.values(cart),
  sessionUser
});

const MDP = dispatch => ({
  addToCart: (gameId) => dispatch(createCartItem(gameId)),
  addToWishlist: (gameId, owned) => dispatch(createLibraryItem(gameId, owned))
});

export default connect(MSP, MDP)(PurchaseGame);