import React from 'react';
import FeaturedCarousel from './featured_carousel/featured_carousel';
import OnSale from './on_sale';

export default class GamesIndex extends React.Component {
  componentDidMount () {
    if(!this.props.games.length) this.props.fetchGames();
  }

  render () {
    if (!this.props.games.length) return null;
    
    // filter out 4 non-sale games
    let featuredGames = [];
    this.props.games.forEach(game => {
      if (game.discount === 0 && featuredGames.length < 4) {
        featuredGames.push(game);
      }
    });
    
    // filter out 3 sale games
    let onSaleGames = [];
    this.props.games.forEach(game => {
      if (game.discount > 0 && onSaleGames.length < 3) {
        onSaleGames.push(game);
      }
    });

    return (
    <div className='gamesIndex'>

      <FeaturedCarousel 
        games={featuredGames}
      />

      <OnSale 
        games={onSaleGames}
      />

    </div>
    );
  }
}


