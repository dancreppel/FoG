import React from 'react';
import OnSaleItem from './on_sale_item';

export default class OnSale extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let { games } = this.props;
    let saleItems = games.map((game, index) => (
      <OnSaleItem
        game={game}
        key={'sale item' + index}
        discount={game.discount}
      />
    ));

    return (
      <ul className="sale-items">
        {saleItems}
      </ul>
    )
  }
}