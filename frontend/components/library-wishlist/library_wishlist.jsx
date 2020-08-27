import React from 'react';
import ItemInfoContainer from './item_info_container';
import lodash from 'lodash';
import ownedGames from '../../selectors/owned_games';

class LibraryWishlist extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    let { 
      fetchLibrary, 
      fetchGenres, 
      fetchGamesGenres, 
      fetchCartItems 
    } = this.props;

    fetchLibrary();
    fetchGenres();
    fetchGamesGenres();
    fetchCartItems();
  }
  
  render () {
    let { library, type } = this.props;

    if (lodash.isEmpty(library)) {
      if (type === '/wishlist') {
        return (
          <div className="library-wishlist-component">
            <h1 className="page-title">Your Wishlist is Empty</h1>
          </div>
        )
      } else {
        return (
          <div className="library-wishlist-component">
            <h1 className="page-title">Your Library is Empty</h1>
          </div>
        )
      }
    };

    let games;
    let pageTitle;
    if (type === '/wishlist') {
      games = ownedGames(false, this.props.games, library);
      // debugger;
      pageTitle = <h1 className="page-title">Your Wishlist</h1>
      if (games.length === 0) {
        pageTitle = <h1 className="page-title">Your Wishlist is Empty</h1>
      }
    } else {
      games = ownedGames(true, this.props.games, library);

      pageTitle = <h1 className="page-title">Your Library</h1>
      if (games.length === 0) {
        pageTitle = <h1 className="page-title">Your Library is Empty</h1>
      }
    }

    let itemsArr = games.map((game, index) => {
      let libraryItemId = library.find(item => item.gameId === game.id).id;
      return (
        <ItemInfoContainer
          key={"item info" + index}
          libraryItemId={libraryItemId}
          game={game}
          type={type}
        />
      )
    });

    return (
      <div className="library-wishlist-component">
        {pageTitle}
        <ul>
          {itemsArr}
        </ul>
      </div>
    )
  }
}

export default LibraryWishlist;