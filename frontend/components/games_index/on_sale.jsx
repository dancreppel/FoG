import React from 'react';

export default class OnSale extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    // Only grab games that have a price because you cannot discount a free game
    let games = this.props.games.filter(game => game.price > 0);

    let saleItems = games.map((game, index) => (

    ));

    return (

    )
  }
}