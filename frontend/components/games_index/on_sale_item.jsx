import React from 'react';
import { withRouter } from 'react-router-dom';

class OnSaleItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { index: 0 };
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
  }

  handleHoverOn () {
    // Find the index of url that contains a gif
    let gifIndex = this.props.game.photoUrls.findIndex(src => src.includes("gif"))
    this.setState({ index: gifIndex });
  }

  handleHoverOff () {
    this.setState({ index: 0 });
  }

  render () {
    // Round down discount
    let discount = Math.floor( this.props.discount * 100 );

    // Apply discount
    let unroundedPrice = this.props.game.price * (1 - discount / 100);
    // Round result to nearest hundredth
    let price = Math.floor(unroundedPrice * 100)/100;

    return (
      <div className="sale-item">

        <img 
          className="sale-item"
          src={this.props.game.photoUrls[this.state.index]}
          onMouseEnter={this.handleHoverOn}
          onMouseLeave={this.handleHoverOff}
        />

        <div className="discount">

          <p className="discount-percentage">-{discount}%</p>

          <div className="price">
            <p className="original">${this.props.game.price}</p>
            <p className="discounted">${price}</p>
          </div>

        </div>
        
      </div>
    )
  }
}

export default withRouter(OnSaleItem);