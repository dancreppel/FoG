import React from 'react';
import TestSlide from './test_slide';

export default class Slider extends React.Component {
  constructor (props) {
    super(props);
    this.state = {index: 0};
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
  }

  goLeft () {

  }

  goRight () {

  }

  render () {
    let sources = [
      'doom_eternal.jpg',
      'eft.jpg',
      'hearthstone.jpeg'
    ];

    let items = sources.map((source, index) => 
      <TestSlide key={'slide' + index} src={source} data-index={index}/>
    );

    return(
      <div className='sliderDiv'>
        <h2>Slider Goes Here</h2>

        <div className='slider'>
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

