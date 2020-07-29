import React from 'react';
import { withRouter } from 'react-router-dom';

class OnSaleItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { index: 0 };
    this.handleHoverOn = this.handleHoverOn.bind(this);
  }

  handleHoverOn () {
    // Find the index of url that contains a gif
    let gifIndex = this.props.game.photoUrls.findIndex(src => src.includes("gif"))
    this.setState({ index: gifIndex });
  }

  render () {
    let src = this.props.game.photoUrls.find(src => src.includes("gif"))

    return (
      <div className="sale-item">
        <img 
          className="sale-item"
          src={this.props.game.photoUrls[this.state.index]}
          onMouseEnter={this.handleHoverOn}
        />
        {/* <p>{this.props.game.price * ( 1 - this.state.discount )}</p> */}
      </div>
    )
  }
}

export default withRouter(OnSaleItem);