import React from 'react';

export default class CartItem extends React.Component {
  render () {
    let { game, cartId, removeCartItem } = this.props;
    let cover = game.photoUrls.find(url => url.includes("cover"));
    let originalPrice = <></>;
    let gamePrice = game.price;

    if (game.discount > 0) {
      originalPrice = <span className="original-price">${game.price}</span>
      gamePrice = Math.round(game.price * ( 1 - game.discount ) * 100) / 100;
    }

    return (
      <li className="cart-item">

        <div className="cart-item-left">
          <img src={cover} alt="game-cover" />
          <h1>{game.title}</h1>
        </div>

        <div className="cart-item-right">
          {originalPrice}
          <span className="price">${gamePrice}</span>
          <span 
            className="remove-cart-item" 
            onClick={() => removeCartItem(cartId)}
          >Remove</span>
        </div>

        <aside className="game-details">

        </aside>

      </li>
    )
  }
};