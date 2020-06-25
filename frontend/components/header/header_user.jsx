import React from 'react';
import { Link } from 'react-router-dom'

export default class HeaderUser extends React.Component {
  constructor (props) {
    super(props);
    this.state = { classVal: 'hidden' };
    this.handleClick = this.handleClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleClick () {
    if (this.state.classVal === 'hidden') this.setState({ classVal: ''});
    else this.setState({ classVal: 'hidden' });
  }

  handleLogout () {
    this.props.logout()
      .then(() => this.setState({ classVal: "hidden" }));
  }

  render () {
    let { currentUser } = this.props;
    let classVal = this.state.classVal;
    return currentUser ? (
      <div className="headerDiv">
        <h1 className="username">{currentUser.username}</h1>

        <div className="dropdownDiv">
          <i className="material-icons" onClick={this.handleClick}>
            arrow_drop_down
          </i>

          <ul className={classVal}>
            <li>View profile</li>
            <li>Account details</li>
            <li className="logoutLi">
              <a onClick={this.handleLogout} href="#">
                Logout:
                <span className="username"> {currentUser.username}</span>
              </a>
            </li>
            <li>Preferences</li>
            <li>Change language</li>
          </ul>
        </div>
        <img src="/assets/incognito.jpg" alt="profile picture" />
      </div>
    ) : (
      <Link className="loginLink" to="/login">
        login
      </Link>
    );
  }
}