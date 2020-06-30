import React from 'react';

const GameInfo = ({ game }) => {
  return (
    <div className="game-info">
      <img className="game-cover" src={game.photoUrls[0]} />

      <p className="game-description">{game.description}</p>

      <div className="game-info-row">
        <div className="game-field">Release Date:</div>
        <div className="game-data">{game.releaseDate}</div>
      </div>

      <div className="game-info-row">
        <div className="game-field">Developer:</div>
        <div className="game-data">{game.developer}</div>
      </div>

      <div className="game-info-row">
        <div className="game-field">Publisher:</div>
        <div className="game-data">{game.publisher}</div>
      </div>

      <p className='game-genres'>Genres:</p>
    </div>
  );
}

export default GameInfo;