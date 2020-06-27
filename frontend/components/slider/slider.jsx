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
      <TestSlide key={'slide' + index} src={source} />
    );

    return(
      <div className='slider'>
        <h2>Slider Goes Here</h2>
        <button className='goLeft' onClick={this.goLeft}></button>
        {items}
        <button className='goRight'></button>
      </div>
    )
  }
}

