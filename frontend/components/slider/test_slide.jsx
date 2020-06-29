import React from 'react';

const TestSlide = (props) => {
  let selected = (props.selected === true) ? 'selected' : '';

  return (

    <img 
      className={selected}
      src={`/assets/test_images/${props.src}`} 
      alt="gameImage"
      style = {
        {
          height: `${props.height}px`,
          width: `${props.width}px`
        }
      }
    />
  )
}

export default TestSlide;

