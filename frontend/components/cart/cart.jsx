import React from 'react';
import CartItemContainer from './cart_item_container';
import { Link } from "react-router-dom";

export default class Cart extends React.Component {
  constructor (props) {
    super(props);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  componentDidMount () {
    this.props.getUserCart()
      .then(this.props.fetchGenres)
      .then(this.props.fetchGamesGenres);
  }

  handlePurchase (e) {
    e.preventDefault();
    this.props.removeCartItem('all');
  }

  render () {
    let cart = Object.values(this.props.cart);
    let { games, removeCartItem } = this.props;

    let totalPrice = 0;
    let cartItems = cart.map((cartItem, index) => {
      let game = games[cartItem.gameId];
      totalPrice += game.price * (1 - game.discount);

      return (
        <CartItemContainer 
          key={'cart item ' + index}
          game={game}
          cartId={cartItem.id}
        />
      )
    });

    // round total price after it has been tallied
    totalPrice = Math.round(totalPrice * 100) / 100;

    let removeAll;
    let purchaseButton;
    let pageTitle;
    if (cart.length === 0) {
      pageTitle = <h1 className="page-title">Your Cart is Empty!</h1>
      removeAll = <div></div>;
    } else {
      pageTitle = <h1 className="page-title">Your Shopping Cart</h1>
      removeAll = (
        <a
          onClick={() => removeCartItem('all')}
          className="remove-all"
        >Remove all items</a>
      )
      purchaseButton = (
        <button
          onClick={this.handlePurchase}
          className="purchase"
        >Purchase</button>
      )
    }


    return (
      <div className="cart">
        <div className="cart-component">

          {pageTitle}

          <ul className="cart-items">
            {cartItems}
          </ul>

          <div className="payment">
            <div className="total-price">
              <h2>Total Price:</h2>
              <h2>${totalPrice}</h2>
            </div>
            <div className="purchase-div">
              {purchaseButton}
            </div>
          </div>
          
          <div className="cart-misc">
            <Link to="/" className="continue-shopping">Continue Shopping</Link>
            {removeAll}
          </div>
        </div>

      </div>
    )
  }
}