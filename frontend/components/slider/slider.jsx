import React from 'react';
import TestSlide from './test_slide';

export default class Slider extends React.Component {
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

      </div>
    )
  }
}

