import React from 'react';

const Slide = (props) => {
  let selected = (props.selected === true) ? 'selected' : '';

  return (

    <img 
      className={'slide ' + selected}
      data-index={props.index}
      src={`${props.src}`} 
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

export default Slide;

