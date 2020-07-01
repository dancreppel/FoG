import React from 'react';

export default class FeaturedItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { index: 0 }
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
  }
  
  handleHoverOn (e) {
    let index = e.target.dataset.index;
    this.setState({ index });
  }

  handleHoverOff (e) {
    this.setState({ index: 0 });
  }

  render () {
    let game = this.props.game;
    let index = this.state.index;

    let images = game.slice(1, 5).map((src, index) => (
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
      <div className='featured-item'>
        <img className='main-img' src={game[index]} alt="main"/>
  
        <aside>
          <h1 className='game-title'>game.title</h1>
  
          <div className='featured-grid' >
            {images}
          </div>
  
          <p className='game-price'>$69.69</p>
        </aside>
      </div>
    )
  };

}

