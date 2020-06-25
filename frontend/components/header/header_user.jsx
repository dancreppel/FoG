import React from 'react';
import { Link } from 'react-router-dom'

export default class HeaderUser extends React.Component {
  constructor (props) {
    super(props);
    this.state = { classVal: 'hidden' };
    this.handleClick = this.handleClick.bind(this);

    // exit out of drop down anytime i click outside of drop down
    document.body.addEventListener("click", (e) => {
      this.setState({ classVal: "hidden" });
    });
  }

  handleClick () {
    if (this.state.classVal === 'hidden') this.setState({ classVal: ''});
    else this.setState({ classVal: 'hidden' });
  }

  render () {
    let { currentUser, logout } = this.props;
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
              <a onClick={logout} href="#">
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
      <div className='loginLinks'>
        <Link className="loginLink" to="/login">
          login
        </Link>

      </div>
    );
  }
}