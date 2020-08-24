import React from 'react';
import { genresForGame } from "../../selectors/games_genres";
import lodash from 'lodash'

export default class CartItem extends React.Component {
  constructor (props) {
    super(props);
    // this.state = { hidden: true };
  }

  componentDidMount () {
    this.setState({ hidden: true });
  }

  render () {
    let { 
      game, 
      cartId, 
      genres, 
      gamesGenres, 
      removeCartItem,
    } = this.props;

    if (lodash.isEmpty(genres) || lodash.isEmpty(gamesGenres)) return null;

    let cover = game.photoUrls.find(url => url.includes("cover"));
    let originalPrice = <></>;
    let gamePrice = game.price;

    if (game.discount > 0) {
      originalPrice = <span className="original-price">${game.price}</span>
      gamePrice = Math.round(game.price * ( 1 - game.discount ) * 100) / 100;
    }

    let gamePictures = game.photoUrls.filter(url => 
      !url.includes("cover") && !url.includes("gif")
    );

    let tags = genresForGame(genres, gamesGenres, game.id).map((genre, index) =>
      <div key={'genre' + index}>{genre}</div>
    );

    // hide game details if state is hidden
    let gameDetails;
    if (!this.state.hidden) {
      gameDetails = (
        <aside className="game-details">
          <h1>{game.title}</h1>
          <h2>{game.releaseDate}</h2>
          <img src={gamePictures[0]} />
          <p className='game-field'>Genres:</p>
          <div className='game-tags'>
            {tags}
          </div>
        </aside>
      )
    }

    return (
      <li 
        className="cart-item"
        onMouseEnter={() => this.setState({hidden: false})}
        onMouseLeave={() => this.setState({hidden: true})}
      >

        <div className="cart-item-left">
          <img src={cover} alt="game-cover" />
          <h1>{game.title}</h1>
        </div>

        <div className="cart-item-right">
          {originalPrice}
          <span className="price">${gamePrice}</span>
          <span 
            className="remove-cart-item" 
            onClick={() => removeCartItem(cartId)}
          >Remove</span>
        </div>

        {gameDetails}

      </li>
    )
  }
};