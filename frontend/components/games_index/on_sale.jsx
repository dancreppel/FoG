import React from 'react';
import OnSaleItem from './on_sale_item';

export default class OnSale extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    // Only grab games that have a price because you cannot discount a free game
    let games = this.props.games.filter(game => game.price > 0);

    // Limit sale items to 3
    let saleItems = [];
    games.forEach((game, index) => {
      if (saleItems.length < 3) {
        saleItems.push(<OnSaleItem 
          game={game}
          key={'sale item' + index}
        />)
      }
    });

    return (
      <ul className="sale-items">
        {saleItems}
      </ul>
    )
  }
}