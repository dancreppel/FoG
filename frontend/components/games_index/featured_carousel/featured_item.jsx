import React from 'react';
import { withRouter } from 'react-router-dom';

class FeaturedItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { index: 0 }
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
    this.redirect = this.redirect.bind(this);
  }
  
  handleHoverOn (e) {
    let index = e.target.dataset.index;
    this.setState({ index });
  }

  handleHoverOff (e) {
    this.setState({ index: 0 });
  }

  redirect () {
    let id = this.props.game.id;
    this.props.history.push(`/games/${id}`);
  }

  render () {
    let game = this.props.game;
    let index = this.state.index;

    let images = game.photoUrls.slice(1, 5).map((src, index) => (
      <img 
        onMouseEnter={this.handleHoverOn}
        onMouseLeave={this.handleHoverOff}
        className='grid-img'
        key={'src' + index} 
        src={src} 
        data-index={index + 1}
        alt="grid-image"/>
    ));
  
    return (
      <div className="featured-item">
        <img 
          className="main-img" 
          src={game.photoUrls[index]} 
          onClick={this.redirect}
          alt="main" />

        <aside>
          <h1 className="game-title">{game.title}</h1>

          <div className="featured-grid">{images}</div>

          <p className="game-price">${game.price}</p>
        </aside>
      </div>
    );
  };

}

export default withRouter(FeaturedItem);