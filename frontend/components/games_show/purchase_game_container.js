import { connect } from 'react-redux'
import PurchaseGame from './purchase_game';
import { createCartItem } from "../../actions/cart_actions";
import { createLibraryItem } from '../../actions/library_actions';

const MSP = ({ sessionUser, entities: { cart, library } } ) => ({
  cart: Object.values(cart),
  library: Object.values(library),
  sessionUser
});

const MDP = dispatch => ({
  addToCart: (gameId) => dispatch(createCartItem(gameId)),
  addToWishlist: (gameId, owned) => dispatch(createLibraryItem(gameId, owned))
});

export default connect(MSP, MDP)(PurchaseGame);