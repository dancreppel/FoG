import { connect } from 'react-redux';
import ItemInfo from './item_info';
import { createCartItem } from "../../actions/cart_actions";
import { deleteLibraryItem } from '../../actions/library_actions';

const MSP = ({ sessionUser, entities: { cart, genres, gamesGenres } }) => ({
  cart: Object.values(cart),
  genres,
  gamesGenres,
  sessionUser
});

const MDP = dispatch => ({
  addToCart: (gameId) => dispatch(createCartItem(gameId)),
  deleteLibraryItem: libraryItemId => dispatch(deleteLibraryItem(libraryItemId))
});

export default connect(MSP, MDP)(ItemInfo);
