import React from 'react';
import { Link } from 'react-router-dom'

export default class HeaderUser extends React.Component {
  constructor (props) {
    super(props);
    this.state = { classVal: 'hidden' };
    this.handleClick = this.handleClick.bind(this);

    // exit out of drop down anytime i click outside of drop down
    document.body.addEventListener("click", (e) => {
      let dropdown = Array.from(document.getElementsByClassName('userDropdown'));
      if (!dropdown.includes(e.target)) {
        this.setState({ classVal: "hidden" });
      }
    });
  }

  handleClick () {
    if (this.state.classVal === 'hidden') this.setState({ classVal: ''});
    else this.setState({ classVal: 'hidden' });
  }

  render () {
    let { currentUser, logout, guestLogin } = this.props;
    let classVal = this.state.classVal;
    

    return currentUser ? (
      <div className="headerDiv">

        <div className="userDropdown" onClick={this.handleClick}>

          <h1 className="userDropdown username">{currentUser.username}</h1>

          <i className="userDropdown material-icons" >
            arrow_drop_down
          </i>

          <ul className={classVal}>
            <li><Link to="/cart">Your Cart</Link></li>
            <li>Your Wishlist</li>
            <li>Your Library</li>
            <li className="logoutLi">
              <a onClick={logout} href="#">
                Logout:
                <span className="username"> {currentUser.username}</span>
              </a>
            </li>
          </ul>

        </div>

        {/* <img className='profilePicture' src="/assets/incognito.jpg" alt="profile picture" /> */}
        <div className='profilePicture'/>

      </div>
    ) : (
      <div className="loginLinks">
        <button onClick={guestLogin}>Guest Login</button>
        <p>Or</p>
        <Link className="loginLink" to="/login">
          login
        </Link>
      </div>
    );
  }
}