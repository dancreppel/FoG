import React from 'react';
import FeaturedCarousel from './featured_carousel/featured_carousel';

export default class GamesIndex extends React.Component {
  componentDidMount () {
    if(!this.props.games.length) this.props.fetchGames();
  }

  render () {
    if (!this.props.games.length) return null;
    
    return (
    <div className='gamesIndex'>
      {/* limit featured carousel games to first 5 */}
      <FeaturedCarousel games={this.props.games.slice(0,5)}/>
    </div>
    );
  }
}


