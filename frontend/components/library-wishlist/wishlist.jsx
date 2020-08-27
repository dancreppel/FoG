import React from 'react';
import ItemInfoContainer from './item_info_container';
import lodash from 'lodash';

class Wishlist extends React.Component {
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
    let { 
      library, 
      games
    } = this.props;

    if (lodash.isEmpty(library)) return null;

    let itemsArr = games.map((game, index) => {
      let libraryItemId = library.find(item => item.gameId === game.id).id;
      return (
        <ItemInfoContainer
          key={"item info" + index}
          libraryItemId={libraryItemId}
          game={game}
          type={'wishlist'}
        />
      )
    });

    let pageTitle = <h1 className="page-title">Your Wishlist</h1>
    if (games.length === 0) {
      pageTitle = <h1 className="page-title">Your Wishlist is Empty</h1>
    }

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

export default Wishlist;