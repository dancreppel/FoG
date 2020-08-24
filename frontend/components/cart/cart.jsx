import React from 'react';
import CartItemContainer from './cart_item_container';

export default class Cart extends React.Component {
  componentDidMount () {
    this.props.getUserCart()
      .then(this.props.fetchGenres)
      .then(this.props.fetchGamesGenres);
  }

  render () {
    let cart = Object.values(this.props.cart);
    let { games } = this.props;

    let totalPrice = 0;
    let cartItems = cart.map((cartItem, index) => {
      let game = games[cartItem.gameId];
      totalPrice += Math.round(game.price * (1 - game.discount) * 100) / 100;

      return (
        <CartItemContainer 
          key={'cart item ' + index}
          game={game}
          cartId={cartItem.id}
        />
      )
    });

    // let totalPrice = 0;
    // cartItems.forEach(item => {
    //   debugger;
    //   totalPrice += item.data

    // });

    return (
      <div className="cart">
        <div className="cart-component">

          <h1 className="page-title">Your Shopping Cart</h1>

          <ul className="cart-items">
            {cartItems}
          </ul>

          <div className="payment">
            <div className="total-price">
              <h2>Total Price:</h2>
              <h2>${totalPrice}</h2>
            </div>
            <div className="purchase-div">
              <button className="purchase">Purchase</button>
            </div>
          </div>
          
        </div>

      </div>
    )
  }
}