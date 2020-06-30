import React from 'react';
import Slider from '../slider/slider';
import GameInfo from './game_info';

export default class GamesShow extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchGame(this.props.match.params.id)
  }

  render () {
    // prevent render if game info hasn't been retrieved
    if (!this.props.game.photoUrls) return null;
    debugger;
    return (
      <div className='games-show'>
        <h2 className='game-title'>{this.props.game.title}</h2>
        <div className='show'>
          <Slider photoUrls={this.props.game.photoUrls}/>
          <GameInfo game={this.props.game} />
        </div>
      </div>
    )
  }
}