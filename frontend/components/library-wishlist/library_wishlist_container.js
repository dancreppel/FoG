import { connect } from 'react-redux';
import LibraryWishlist from './library_wishlist';
import { fetchLibrary } from '../../actions/library_actions';
import ownedGames from '../../selectors/owned_games';
import { fetchGenres } from '../../actions/genres_actions';
import { fetchGamesGenres } from '../../actions/games_genres_actions';
import { fetchCartItems } from '../../actions/cart_actions';

// check if game is not owned because then it is a wishlist item
const MSP = ({ entities: { library, games, genres, gamesGenres, cart }}, ownProps) => ({
  library: Object.values(library), 
  games,
  genres,
  gamesGenres,
  cart,
  type: ownProps.match.path
});

const MDP = dispatch => ({
  fetchLibrary: () => dispatch(fetchLibrary()),
  fetchGenres: () => dispatch(fetchGenres()),
  fetchGamesGenres: () => dispatch(fetchGamesGenres()),
  fetchCartItems: () => dispatch(fetchCartItems())
});

const WishlistContainer = connect(MSP, MDP)(LibraryWishlist);
export default WishlistContainer;