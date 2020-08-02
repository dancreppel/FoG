import React from 'react';
import FeaturedCarousel from './featured_carousel/featured_carousel';
import OnSale from './on_sale';

export default class GamesIndex extends React.Component {
  componentDidMount () {
    if(!this.props.games.length) this.props.fetchGames();
  }

  render () {
    if (!this.props.games.length) return null;
    
    return (
    <div className='gamesIndex'>
      {/* limit featured carousel games to first 5 */}
      <FeaturedCarousel 
        games={this.props.games.slice(0,5)} 
        updateDiscount={this.props.updateDiscount}
      />
      {/* pass the rest of the games to OnSale component */}
      <OnSale 
        games={this.props.games.slice(5)} 
        updateDiscount={this.props.updateDiscount}
      />
    </div>
    );
  }
}


