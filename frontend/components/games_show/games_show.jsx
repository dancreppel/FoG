import React from 'react';
import Slider from '../slider/slider';
import GameInfo from './game_info';
import PurchaseGameContainer from './purchase_game_container';

export default class GamesShow extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchCartItems()
    this.props.fetchGame(this.props.match.params.id)
    this.props.fetchGenres();
    this.props.fetchGamesGenres();
    this.props.fetchLibrary();
  }

  render () {
    // prevent render if game info hasn't been retrieved
    let { game, genres, library } = this.props;

    if (!game || !genres) return null;

    let owned = library.some(item => 
        item.gameId === game.id && item.owned === true
      )

    let ownedGame;
    if (owned) {
      ownedGame = (
        <div className="already-owned">
            {game.title} is already in your FoG library
        </div>
      )
    } else ownedGame = <PurchaseGameContainer game={game} />
    
    return (
      <div className='games-show'>
        <h2 className='game-title'>{game.title}</h2>
        <div className='show'>
          <Slider photoUrls={game.photoUrls}/>
          <GameInfo game={game} genres={genres}/>
        </div>
        {ownedGame}
      </div>
    )
  }
}