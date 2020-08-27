import React from 'react';
import { withRouter } from 'react-router-dom';
import { genresForGame } from '../../selectors/games_genres';
import lodash from 'lodash';

class ItemInfo extends React.Component {
  handlePurchase(inCart) {
    let { addToCart, game, sessionUser } = this.props;
    if (!sessionUser) this.props.history.push("/login");
    else {
      if (!inCart) addToCart(game.id);
      this.props.history.push("/cart");
    }
  }

  render () {
    let { 
      game, 
      genres, 
      gamesGenres, 
      type, 
      cart, 
      libraryItemId,
      deleteLibraryItem 
    } = this.props;

    if ( lodash.isEmpty(genres) || lodash.isEmpty(gamesGenres)) return null;

    let genresList = genresForGame(genres, gamesGenres, game.id)
      .map((genre, index) => (
        <li className="genre" key={"genre" + index}>
          {genre}
        </li>
      ));

    let inCart = cart.some(cartItem => cartItem.gameId === game.id);
    let purchaseButtonText = "Add to Cart";
    let priceDiv;
    let discount;
    let className;
    let purchaseButton;
    let itemButtons;
    let itemType;
    if (type === '/wishlist') {

      itemType = "wishlist-item";

      // default add to cart otherwise in cart
      if (inCart) purchaseButtonText = "In Cart"

      if (game.discount === 0) {
        priceDiv = <div className="price">${game.price}</div>
        className = "add-to-cart"
      } else {
        className = "add-to-cart-discounted"
        let discounted = Math.floor(game.price * (1 - game.discount) * 100) / 100;

        discount = (
          <div className="discount">-{game.discount * 100}%</div>
        );

        priceDiv = (
          <div className="discounted-price">
            <div className="original-price">${game.price}</div>
            <div className="current-price">${discounted}</div>
          </div>
        );
      }

      if (game.price === 0) {
        purchaseButton = (
          <div className="free-to-play">
            <div>Free to Play</div>
            <button className="purchase">Play Game</button>
          </div>
        );
      } else {
        purchaseButton = (
          <div className={className}>
            {discount}
            {priceDiv}
            <button
              className="purchase"
              onClick={() => this.handlePurchase(inCart)}
            >{purchaseButtonText}</button>
          </div>
        );
      }

      // wishlist buttons exist if type wishlist
      itemButtons = (
        <div className='wishlist-buttons'>
          {purchaseButton}
          <a 
            onClick={() => deleteLibraryItem(libraryItemId)}
            className='remove-from-wishlist'
          >remove</a>
        </div>
      );
    } else {
      itemType = 'library-item';

      itemButtons = (
        <div className='library-buttons'>
          <a
            onClick={() => deleteLibraryItem(libraryItemId)}
            className='remove-from-library'
          >remove</a>
        </div>
      )
    }

    return (
      <div className={itemType}>

        <img 
          src={game.photoUrls.find(url => url.includes('cover'))} 
          onClick={() => this.props.history.push(`/games/${game.id}`)}
        />

        <div className='item-details'>
          <h1 className='item-title'>{game.title}</h1>
          <p className='release-date'>Release Date: {game.releaseDate}</p>
          <p>Genres:</p>
          <ul className="genres-list">
            {genresList}
          </ul>
        </div>

        {itemButtons}

      </div>
    )
  }
}

export default withRouter(ItemInfo);