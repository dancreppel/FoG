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
    this.handleClick = this.handleClick.bind(this);

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
    this.conLen = this.width * this.sources.length;
  }

  componentDidMount () {
    
  }

  goLeft () {
    // for slider
    let { index, delta } = this.state;

    if (index > 0) index -= 1;
    else index = this.sources.length - 1;

    // move slide right by an image length
    if (index === this.sources.length - 1) delta = -(this.conLen / 2);
    else if (delta !== 0) delta += this.width;

    this.setState({ index, delta });
  }

  goRight () {
    // for slider
    let { index, delta } = this.state;

    if (index === (this.sources.length - 1)) index = 0;
    else index += 1;

    // move slide left by an image length
    if (index === 0) delta = 0;
    else if (delta > -(this.conLen/2)) delta -= this.width;

    this.setState({ index, delta })
  }

  handleClick (e) {
    let index = Number(e.target.dataset.index);
    this.setState({ index });
  }

  mousedownEvent () {
    document.getElementsByClassName('scroller')
  }

  render () {
    let items = this.sources.map((source, index) => 
      <TestSlide 
        key={'slide' + index} 
        src={source} 
        selected={(this.state.index === index) ? true : false}
        index={index}
        height={this.height}
        width={this.width}
      />
    );

    let { index, delta } = this.state;
    // let delta = 30;

    let mainImg = this.sources[index];

    return(
      <div 
        className='sliderDiv'
      >
        <h2>Slider Goes Here!!!</h2>

        <img 
          className='main-image'
          src={`/assets/test_images/${mainImg}`} 
          alt="mainImage"/>

        <div 
          className='slider' 
          onClick={this.handleClick}
          style={{ transform: `translate(${delta}px)` }}
        >
          {items}
        </div>

        <div className='sliderButtons'>

          <div className='goLeft material-icons' onClick={this.goLeft}>
              arrow_left
          </div>

          <div className='scrollbar'>
            <div 
              className='scroller' 
              style={{ transform: `translate(${index*100}%)` }}
            ></div>
          </div>

          <div className='goRight material-icons' onClick={this.goRight}>
              arrow_right
          </div>
        </div>
      </div>
    )
  }
}

