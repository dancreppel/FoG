import React from 'react';
import Slider from '../slider/slider';

export default class GamesShow extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    if (!this.props.game) this.props.fetchGame(this.props.match.params.id)
  }

  render () {
    // prevent render if game doesnt exist
    if (!this.props.game) return null;
    return (
      <div className='show'>
        <Slider photoUrls={this.props.game.photoUrls}/>
      </div>
    )
  }
}