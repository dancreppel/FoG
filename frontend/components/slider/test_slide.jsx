import React from 'react';

const TestSlide = (props) => (
  <img 
    src={`/assets/test_images/${props.src}`} 
    alt="gameImage"
    style={
      {
        height: `${props.height}px`,
        width: `${props.width}px`
      }
    }
  />
)

export default TestSlide;