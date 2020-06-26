import React from 'react';
import TestImage from './test_images';

export default class Carousel extends React.Component {
  render () {
    let testImages = [
      <TestImage src='doom_eternal.jpg'/>,
      <TestImage src='eft.jpg'/>,
      <TestImage src='hearthstone.jpeg'/>
    ];
    let items = testImages.map((item, index) => )

    return(
      <h2>Carousel Goes Here</h2>
      <div className='carousel'>

      </div>
    )
  }
}

