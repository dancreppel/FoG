import { connect } from 'react-redux';
import CartItem from './cart_item';
import { deleteCartItem } from "../../actions/cart_actions";
import genresForGame from "../../selectors/games_genres";

const MSP = ({ entities: { genres, gamesGenres } }) => ({
  genres,
  gamesGenres
});

const MDP = (dispatch) => ({
  removeCartItem: (id) => dispatch(deleteCartItem(id)),
  genresForGame: (genres, gamesGenres, gameId) => 
                    dispatch(genresForGame(genres, gamesGenres, gameId)),
});

export default connect(MSP, MDP)(CartItem);