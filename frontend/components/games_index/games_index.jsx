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
      <FeaturedCarousel games={this.props.games}/>
    </div>
    );
  }
}


