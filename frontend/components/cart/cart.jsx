import React from 'react';
import CartItem from './cart_item';

export default class Cart extends React.Component {
  componentDidMount () {
    this.props.getUserCart()
      .then(this.props.fetchGenres)
      .then(this.props.fetchGamesGenres);
  }

  render () {
    let cart = Object.values(this.props.cart);
    let games = this.props.games;

    let cartItems = cart.map((cartItem, index) => (
      <CartItem 
        key={'cart item ' + index}
        game={games[cartItem.gameId]} 
        cartId={cartItem.id}
      />
    ));

    return (
      <div className="cart">
        <div className="cart-component">

          <h1 className="page-title">Your Shopping Cart</h1>

          <ul className="cart-items">
            {cartItems}
          </ul>

          <div className="payment">
            <div className="total-price">

            </div>

            <button className="purchase">Purchase</button>
          </div>
          
        </div>

      </div>
    )
  }
}