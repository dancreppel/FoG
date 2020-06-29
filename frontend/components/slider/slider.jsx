import React from 'react';
import TestSlide from './test_slide';

export default class Slider extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      index: 0,
      delta: 0
    };

    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
    this.height = 70;
    this.width = 120;
    this.sources = [
      'doom_eternal.jpg',
      'eft.jpg',
      'hearthstone.jpeg',
      'apex_legends.jpg',
      'beat_saber.jpg',
      'cyberpunk.png',
      'halo.png',
      'overwatch.jpg',
      'starwars.jpg',
      'MapleStory2.jpg'
    ]
    this.containerLength = this.width * this.sources.length;
  }

  goLeft () {
    let { index, delta } = this.state;

    if (index > 0) index -= 1;
    else index = this.sources.length;

    // move slide right by an image length
    if (delta !== 0) delta += this.width;
    else delta = -(this.containerLength / 2);
    this.setState({ index, delta });
  }

  goRight () {
    let { index, delta } = this.state;

    index += 1;

    // move slide left by an image length
    delta = this.state.delta - this.width;

    this.setState({ index, delta })
  }

  render () {
    let items = this.sources.map((source, index) => 
      <TestSlide 
        key={'slide' + index} 
        src={source} 
        data-index={index}
        height={this.height}
        width={this.width}
      />
    );

    let delta = this.state.delta;
    // let delta = -600

    return(
      <div 
        className='sliderDiv'
        
      >
        <h2>Slider Goes Here!!!</h2>

        <div 
          className='slider' 
          style={{ transform: `translate(${delta}px)` }}
        >
          {items}
        </div>

        <div className='sliderButtons'>

          <div className='goLeft material-icons' onClick={this.goLeft}>
              arrow_left
          </div>

          <div className='scrollbar'>
            <div className='scroller'></div>
          </div>

          <div className='goRight material-icons' onClick={this.goRight}>
              arrow_right
          </div>
        </div>
      </div>
    )
  }
}

