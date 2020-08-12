import React from 'react';
import Slide from './slide';

export default class Slider extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      index: 0,
      delta: 0,
    };

    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.containerWidth = 600;
    this.height = 70;
    this.width = 120;
    this.sources = props.photoUrls.slice(1);

    // *for testing
    // this.sources = [
    //   'doom_eternal.jpg',
    //   'eft.jpg',
    //   'hearthstone.jpeg',
    //   'apex_legends.jpg',
    //   'beat_saber.jpg',
    //   'cyberpunk.png',
    //   'halo.png',
    //   'overwatch.jpg',
    //   'starwars.jpg',
    //   'MapleStory2.jpg'
    // ]
    
    // for determining the length of slider interms of percentage compared to 
    // container width
    this.shift = (this.width / this.containerWidth) * 100
    this.conLen =  this.shift * this.sources.length;

  }

  goLeft () {
    // for slider
    let { index, delta } = this.state;
    let length = this.sources.length;

    if (index > 0) index -= 1;
    else index = this.sources.length - 1;

    // move slide right by an image length in percentage relative to container width
    if (index === length - 1) delta = 100 - this.conLen;
    else if (delta !== 0) delta += 20;

    this.setState({ index, delta });
  }

  goRight () {
    // for slider
    let { index, delta } = this.state;

    if (index === (this.sources.length - 1)) index = 0;
    else index += 1;

   // move slide right by an image length in percentage relative to container width
    if (index === 0) delta = 0;
    else if (delta > (100 - this.conLen)) delta -= this.shift;


    this.setState({ index, delta })
  }

  handleClick (e) {
    let index = Number(e.target.dataset.index);

    // reposition slider for selected
    let delta;
    if (index < this.sources.length - 5) delta = 0 - this.shift * index;
    else delta = 100 - this.conLen;

    this.setState({ index, delta });
  }

  render () {
    let items = this.sources.map((source, index) => 
      <Slide 
        key={'slide' + index} 
        src={source} 
        selected={(this.state.index === index) ? true : false}
        index={index}
        height={this.height}
        width={this.width}
      />
    );

    let { index, delta } = this.state;
    let length = this.sources.length;

    let mainImg = this.sources[index];

    let tabs = this.sources.map(( _, index) => {
      let selected = (this.state.index === index)
        ? ' selected'
        : ''

      return (
        <div
          onClick={this.handleClick}
          className={"tab" + selected}
          style={{width: `${100 / length - 0.5}%` }}
          key={"tab" + index}
          data-index={index}
        ></div>
      );
    });

    return (
      <div
        className="sliderDiv"
        style={{ width: `${this.containerWidth + 5}px` }}
      >
        <img className="main-image" src={`${mainImg}`} alt="mainImage" />

        <div
          className="slider"
          onClick={this.handleClick}
          style={{ transform: `translate(${delta}%)` }}
        >
          {items}
        </div>

        <div className="sliderButtons">
          <span className="goLeft material-icons" onClick={this.goLeft}>
            arrow_left
          </span>

          <div className="tabsBar">
            <div className="tabs">{tabs}</div>
          </div>

          <span className="goRight material-icons" onClick={this.goRight}>
            arrow_right
          </span>
        </div>
      </div>
    );
  }
}

