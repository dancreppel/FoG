import React from 'react';
import { genresForGame } from "../../selectors/games_genres";
import lodash, { set } from 'lodash'

export default class CartItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      index: 0,
      hidden: true
    };
  }

  // componentDidMount () {
  //   this.setState({ hidden: true });
  // }

  incrementIndex (length) {
    this.timeout = setTimeout(() => {
      let index = this.state.index;
      if (index < length - 1) {
        index += 1;
        this.setState({ index });
      }
      else this.setState({ index: 0 });
    }, 750);
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
    <div className='game-tag' key={'genre' + index}>{genre}</div>
    );
    
    // hide game details if state is hidden
    let gameDetails;
    if (!this.state.hidden) {
      this.incrementIndex(gamePictures.length);
      gameDetails = (
        <aside className="game-details">
          <span className="material-icons">
            arrow_left
          </span>
          <h1>{game.title}</h1>
          <h2>Released: {game.releaseDate}</h2>
          <img src={gamePictures[this.state.index]} />
          <h2 className='game-field'>Genres:</h2>
          <div className='game-tags'>
            {tags}
          </div>
        </aside>
      )
    } else clearTimeout(this.timeout);

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