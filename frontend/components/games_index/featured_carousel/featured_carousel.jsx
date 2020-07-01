import React from 'react';
import FeaturedItem from './featured_item';

export default class FeaturedCarousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      index: 0
    };
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
    this.handleClick = this.handleClick.bind(this);

    // *for testing
    this.sources = [
      "assets/test_images/doom_eternal.jpg",
      "assets/test_images/eft.jpg",
      "assets/test_images/hearthstone.jpeg",
      "assets/test_images/typing.gif",
      "assets/test_images/apex_legends.jpg",
      "assets/test_images/beat_saber.jpg",
      "assets/test_images/cyberpunk.png",
      "assets/test_images/halo.png",
      "assets/test_images/overwatch.jpg",
      "assets/test_images/starwars.jpg",
      "assets/test_images/MapleStory2.jpg",
    ];
  }

  goLeft () {
    let index = this.state.index;
    if (index === 0) index = this.sources.length - 1;
    else index -= 1;
    this.setState({ index });
  }

  goRight () {
    let index = this.state.index;
    if (index === this.sources.length - 1) index = 0;
    else index += 1;
    this.setState({ index });
  }

  handleClick (e) {
    let index = Number(e.target.dataset.index);
    this.setState({ index });
  }

  render () {
    let game = this.sources;

    let tabs = this.sources.map((_, index) => {
      let selected = this.state.index === index ? " selected" : "";

      return (
        <div
          className={'tab'+selected}
          key={"tab" + index}
          onClick={this.handleClick}
          data-index={index}
        ></div>
      )
    });

    return (
      <div className="featured-games">

        <h1>Featured & Recommended</h1>

        <div className="featured-carousel">
          <div className="goLeft" onClick={this.goLeft}>
            <span className="material-icons">chevron_left</span>
          </div>

          <FeaturedItem className="featured-item" game={game}/>

          <div className="goRight" onClick={this.goRight}>
            <span className="material-icons">chevron_right</span>
          </div>
        </div>

        <div className='tabs'>
          {tabs}
        </div>

      </div>
    );
  }
}