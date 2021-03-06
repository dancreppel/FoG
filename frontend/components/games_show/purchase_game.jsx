import React from 'react';
import { withRouter } from 'react-router-dom'

class PurchaseGame extends React.Component {
  constructor (props) {
    super(props);
  }

  handlePurchase (inCart) {
    let { addToCart, game, sessionUser, history } = this.props;
    if (!sessionUser) history.push("/login");
    else {
      if (!inCart) addToCart(game.id);
      this.props.history.push("/cart");
    }
  }

  handleWishlisting (inWishlist) {
    let { addToWishlist, game, history, sessionUser } = this.props;

    if (!sessionUser) history.push('/login');
    else if (inWishlist) history.push('/wishlist');
    else addToWishlist(game.id, false);
  }
  
  render () {
    let { game, cart, library, sessionUser } = this.props;
    let addToLibrary = this.props.addToWishlist;

    let inCart = cart.some(cartItem => cartItem.gameId === game.id);
    let inWishlist = library.some(item => 
      item.gameId === game.id && item.owned === false);

    // default add to cart otherwise in cart
    let purchaseButtonText = "Add to Cart";
    if (inCart) purchaseButtonText = "In Cart"

    let priceDiv;
    let discount;
    let className;
    if ( game.discount === 0 ) {
      priceDiv = <div className="price">${game.price}</div>
      className = "add-to-cart"
    } else {
      className = "add-to-cart-discounted"
      let discounted = Math.floor(game.price*(1-game.discount)*100)/100;

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

    let title;
    let purchaseButton;
    if (game.price === 0) {
      title = <h1>Play {game.title}</h1>
      purchaseButton = (
        <div className="free-to-play">
          <div>Free to Play</div>
          <button 
            className="purchase"
            onClick={() => {
              if (!sessionUser) this.props.history.push('/login')
              else addToLibrary(game.id, true)
            }}
          >Play Game</button>
        </div>
      );
    } else {
      title = <h1>Buy {game.title}</h1>
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

    let wishlistButtonText = "Add to your wishlist";
    if (inWishlist) wishlistButtonText = (
      <div className="in-wishlist">
        <div className="material-icons">check_box</div>
        <div className='in-wishlist-text'>On Wishlist</div>
      </div>
    )

    return (
      <div className="show-purchase-wishlist">
        {title}
        <div className="wishlist-or-add">
          <button
            onClick={() => this.handleWishlisting(inWishlist)}
            className="wishlist"
          >{wishlistButtonText}</button>

          {purchaseButton}
        </div>
      </div>
    )
  }
}

export default withRouter(PurchaseGame);