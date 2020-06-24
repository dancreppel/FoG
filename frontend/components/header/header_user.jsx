import React from 'react';
import { Link } from 'react-router-dom'

export default class HeaderUser extends React.Component {
  constructor (props) {
    super(props);
    this.state = { classVal: 'hidden' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    if (this.state.classVal === 'hidden') this.setState({ classVal: ''});
    else this.setState({ classVal: 'hidden' });
  }

  render () {
    let { currentUser, logout } = this.props;
    let classVal = this.state.classVal;
    return (
      currentUser ? (
        <div className='headerDiv'>
          <h1 className='headerUser'>{currentUser.username}</h1>

          <div className='headerDropDown'>
            <i className="material-icons" onClick={this.handleClick}>
              arrow_drop_down
            </i>
            <ul className={classVal}>
              <a onClick={logout} href="#">Logout:
                <span> {currentUser.username}</span>
              </a>
            </ul>
          </div>
        </div>
      ) : (
        <Link to='/login'>login</Link>
      )
    )
  }
}